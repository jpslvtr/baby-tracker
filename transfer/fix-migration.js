const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, updateDoc, doc, query, where } = require('firebase/firestore');
const fs = require('fs');
const csv = require('csv-parser');

const firebaseConfig = {
    apiKey: "AIzaSyA66X3tR-oquob5ZbBrrHv_EAmhwEHTi48",
    authDomain: "baby-tracker-b0936.firebaseapp.com",
    projectId: "baby-tracker-b0936",
    storageBucket: "baby-tracker-b0936.firebasestorage.app",
    messagingSenderId: "931756532206",
    appId: "1:931756532206:web:bf90d10dc3e3837383eeff"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function fixAllMigrationIssues() {
    console.log('Reading CSV file...');

    const csvEntries = [];

    // Read the CSV
    await new Promise((resolve, reject) => {
        fs.createReadStream('baby-data.csv')
            .pipe(csv())
            .on('data', (row) => {
                csvEntries.push({
                    type: row.Type,
                    startTime: new Date(row.Start),
                    endCondition: row['End Condition'] || '',
                    startCondition: row['Start Condition'] || '',
                    startLocation: row['Start Location'] || '',
                    notes: row.Notes || ''
                });
            })
            .on('end', resolve)
            .on('error', reject);
    });

    console.log(`Found ${csvEntries.length} entries in CSV\n`);

    // Get all entries from Firebase
    const snapshot = await getDocs(collection(db, 'entries'));
    console.log(`Found ${snapshot.docs.length} entries in Firebase\n`);

    let fixedDiapers = 0;
    let notFoundInCSV = 0;

    console.log('Fixing diaper entries with "Both" → "Mixed"...');

    for (const docSnapshot of snapshot.docs) {
        const data = docSnapshot.data();
        const firestoreTime = data.startTime.toDate();

        // Find matching CSV entry by timestamp (within 1 minute)
        const matchingCSV = csvEntries.find(csv => {
            const timeDiff = Math.abs(csv.startTime - firestoreTime);
            return timeDiff < 60000; // 1 minute tolerance
        });

        if (matchingCSV) {
            // Fix diaper entries
            if (data.type === 'Diaper') {
                let correctDiaperType = null;

                if (matchingCSV.endCondition === 'Both') {
                    correctDiaperType = 'Mixed';
                } else if (matchingCSV.endCondition === 'Poo') {
                    correctDiaperType = 'Poo';
                } else if (matchingCSV.endCondition === 'Pee') {
                    correctDiaperType = 'Pee';
                }

                if (correctDiaperType && data.diaperType !== correctDiaperType) {
                    try {
                        await updateDoc(doc(db, 'entries', docSnapshot.id), {
                            diaperType: correctDiaperType
                        });
                        console.log(`✓ Fixed diaper: ${firestoreTime.toLocaleString()} - ${data.diaperType} → ${correctDiaperType}`);
                        fixedDiapers++;
                    } catch (error) {
                        console.error(`✗ Error updating ${docSnapshot.id}:`, error.message);
                    }
                }
            }
        } else {
            // This entry wasn't in the CSV (probably added after migration)
            notFoundInCSV++;
        }
    }

    console.log('\n=== Summary ===');
    console.log(`Entries in CSV: ${csvEntries.length}`);
    console.log(`Entries in Firebase: ${snapshot.docs.length}`);
    console.log(`New entries (not in CSV): ${notFoundInCSV}`);
    console.log(`Diaper entries fixed: ${fixedDiapers}`);
    console.log('\nDone!');
}

fixAllMigrationIssues().catch(console.error);