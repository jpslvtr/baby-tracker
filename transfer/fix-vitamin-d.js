import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, deleteDoc, Timestamp } from 'firebase/firestore';

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

async function fixVitaminDRecords() {
    console.log('Fixing vitamin D records...');

    // Delete the wrong records (Nov 10-14)
    console.log('\nDeleting incorrect records...');
    const wrongDates = ['2025-11-10', '2025-11-11', '2025-11-12', '2025-11-13', '2025-11-14'];

    for (const dateKey of wrongDates) {
        try {
            await deleteDoc(doc(db, 'vitaminD', dateKey));
            console.log(`✓ Deleted ${dateKey}`);
        } catch (error) {
            console.error(`✗ Error deleting ${dateKey}:`, error.message);
        }
    }

    // Add the correct records (Nov 11-15)
    console.log('\nAdding correct records...');
    const correctDates = [
        new Date(2025, 10, 11), // Nov 11 (month is 0-indexed)
        new Date(2025, 10, 12), // Nov 12
        new Date(2025, 10, 13), // Nov 13
        new Date(2025, 10, 14), // Nov 14
        new Date(2025, 10, 15)  // Nov 15
    ];

    for (const date of correctDates) {
        date.setHours(12, 0, 0, 0);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const dateKey = `${year}-${month}-${day}`;

        try {
            await setDoc(doc(db, 'vitaminD', dateKey), {
                given: true,
                date: Timestamp.fromDate(date)
            });
            console.log(`✓ Added vitamin D record for ${month}/${day}/${year}`);
        } catch (error) {
            console.error(`✗ Error adding record for ${dateKey}:`, error.message);
        }
    }

    console.log('\nDone! Vitamin D records fixed.');
}

fixVitaminDRecords().catch(console.error);