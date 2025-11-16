const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc, Timestamp } = require('firebase/firestore');

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

async function populateVitaminDHistory() {
    console.log('Populating vitamin D history from Nov 11-15, 2025...');

    const dates = [
        new Date('2025-11-11'),
        new Date('2025-11-12'),
        new Date('2025-11-13'),
        new Date('2025-11-14'),
        new Date('2025-11-15')
    ];

    for (const date of dates) {
        date.setHours(0, 0, 0, 0);

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

    console.log('\nDone! Historical vitamin D data populated.');
}

populateVitaminDHistory().catch(console.error);