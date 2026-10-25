import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signInWithRedirect, signOut } from 'firebase/auth';
import { getDocFromServer } from 'firebase/firestore';
import { auth, changeMarkerRef } from './firebase';

// Firestore rules decide who has access (the email list isn't in the site's
// code), so ask them: this read fails with permission-denied for anyone not
// on the list. Offline or slow, trust the sign-in and let cached data load.
async function hasAccess(): Promise<boolean> {
    const check = getDocFromServer(changeMarkerRef).then(
        () => true,
        (error: any) => error?.code !== 'permission-denied'
    );
    const timeout = new Promise<boolean>(resolve => setTimeout(() => resolve(true), 4000));
    return Promise.race([check, timeout]);
}

function showError(message: string): void {
    const error = document.getElementById('signin-error') as HTMLDivElement;
    error.textContent = message;
    error.style.display = 'block';
}

async function signIn(): Promise<void> {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    try {
        await signInWithPopup(auth, provider);
    } catch (error: any) {
        if (error?.code === 'auth/popup-blocked') {
            await signInWithRedirect(auth, provider);
        } else if (error?.code !== 'auth/popup-closed-by-user' && error?.code !== 'auth/cancelled-popup-request') {
            console.error('Sign-in failed:', error);
            showError(error?.code === 'auth/unauthorized-domain'
                ? `Sign-in isn't set up for ${window.location.hostname} yet. In the Firebase console, add it under Authentication > Settings > Authorized domains.`
                : `Sign-in failed (${error?.code ?? 'unknown error'}). Please try again.`);
        }
    }
}

export async function signOutAndReload(): Promise<void> {
    await signOut(auth);
    window.location.reload();
}

// Signing out a rejected account can reload the page (in this tab or any
// other open tab), so the reason is kept in sessionStorage until shown.
const DENIED_KEY = 'signinDenied';

function showStoredDenial(): void {
    const denied = sessionStorage.getItem(DENIED_KEY);
    if (denied) {
        sessionStorage.removeItem(DENIED_KEY);
        showError(`${denied} doesn't have access. Sign in with an account on the list, or ask the person who set this up to add yours.`);
    }
}

// Calls onSignedIn once, the first time an allowed user is signed in.
export function requireSignIn(onSignedIn: () => void): void {
    const signinScreen = document.getElementById('signin-screen') as HTMLDivElement;
    const appScreen = document.getElementById('app') as HTMLDivElement;
    let started = false;

    document.getElementById('signin-button')?.addEventListener('click', signIn);

    onAuthStateChanged(auth, async user => {
        if (user && await hasAccess()) {
            signinScreen.style.display = 'none';
            appScreen.style.display = 'block';
            if (!started) {
                started = true;
                onSignedIn();
            }
            return;
        }

        if (user) {
            sessionStorage.setItem(DENIED_KEY, user.email ?? 'This account');
            await signOut(auth);
        }

        if (started) {
            window.location.reload();
            return;
        }

        appScreen.style.display = 'none';
        signinScreen.style.display = 'flex';
        showStoredDenial();
    });
}
