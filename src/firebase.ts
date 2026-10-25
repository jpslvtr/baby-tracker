import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager, getDocs, getDocsFromCache, doc, serverTimestamp, WriteBatch } from 'firebase/firestore';
import { config } from './config';

const firebaseApp = initializeApp(config.firebase);

export const auth = getAuth(firebaseApp);

// Persist reads in IndexedDB so the app can serve them locally (instant) and
// only revalidate against the server in the background. Multi-tab manager keeps
// the cache consistent if the app is open in more than one tab.
export const db = initializeFirestore(firebaseApp, {
    localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() })
});

// Read source for the loaders: 'cache' renders instantly from the local
// IndexedDB cache, 'server' fetches the authoritative copy.
export type ReadSource = 'cache' | 'server';

// getDocs that honors the read source. A cache miss surfaces as a thrown
// FirebaseError (handled by callers, which fall back to the server pass).
export function qDocs(q: any, source: ReadSource): Promise<any> {
    return source === 'cache' ? getDocsFromCache(q) : getDocs(q);
}

// Like qDocs, but on a cache miss it falls back to the server instead of
// throwing. Used by the post-add refresh path: 'cache' reads the pending write
// instantly (Firestore latency compensation) while still being correct for
// out-of-order/backdated entries, and degrades gracefully when the cache is cold.
export function qDocsCacheFirst(q: any, source: ReadSource): Promise<any> {
    return source === 'cache' ? getDocsFromCache(q).catch(() => getDocs(q)) : getDocs(q);
}

// Every write also touches this one document. Other devices listen to it
// (see sync.ts) instead of to the whole entries collection, which would cost a
// read per entry each time the app opens.
export const changeMarkerRef = doc(db, 'meta', 'lastChange');

// Identifies this tab so it can ignore change markers it wrote itself.
export const clientId = Math.random().toString(36).slice(2);

export function markChanged(batch: WriteBatch): void {
    batch.set(changeMarkerRef, { at: serverTimestamp(), by: clientId, nonce: Math.random().toString(36).slice(2) });
}
