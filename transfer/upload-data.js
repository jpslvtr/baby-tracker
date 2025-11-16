const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');
const fs = require('fs');
const csv = require('../config/node_modules/csv-parser');

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

function parseEntry(row) {
    const type = row.Type;
    const start = row.Start ? new Date(row.Start) : null;
    const end = row.End ? new Date(row.End) : null;

    let entry = {
        type: type,
        startTime: start,
        notes: row.Notes || ''
    };

    if (type === 'Feed') {
        if (row['Start Location'] === 'Breast') {
            entry.type = 'Breast Feed';
        } else if (row['Start Condition'] === 'Breast Milk') {
            entry.subType = 'Breast Milk';
            entry.amount = parseFloat(row['End Condition']) || 0;
            entry.unit = row['End Condition']?.includes('oz') ? 'oz' : 'ml';
        } else if (row['Start Condition'] === 'Formula') {
            entry.subType = 'Formula';
            entry.amount = parseFloat(row['End Condition']) || 0;
            entry.unit = row['End Condition']?.includes('oz') ? 'oz' : 'ml';
        }
    } else if (type === 'Diaper') {
        entry.diaperType = row.Notes?.toLowerCase().includes('pee') && row.Notes?.toLowerCase().includes('poo') ? 'Mixed' :
            row.Notes?.toLowerCase().includes('poo') ? 'Poo' : 'Pee';
    } else if (type === 'Pump') {
        entry.endTime = end;
        entry.amount = parseFloat(row['Start Condition']) || 0;
        entry.unit = row['Start Condition']?.includes('oz') ? 'oz' : 'ml';
    }

    return entry;
}

async function uploadData() {
    const entries = [];

    fs.createReadStream('baby-data.csv')
        .pipe(csv())
        .on('data', (row) => {
            entries.push(parseEntry(row));
        })
        .on('end', async () => {
            console.log(`Parsed ${entries.length} entries`);

            for (const entry of entries) {
                try {
                    await addDoc(collection(db, 'entries'), entry);
                    console.log('Added entry:', entry.type, entry.startTime);
                } catch (error) {
                    console.error('Error adding entry:', error, entry);
                }
            }

            console.log('Upload complete');
        });
}

uploadData();