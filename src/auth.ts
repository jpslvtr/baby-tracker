import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signInWithRedirect, signOut, User } from 'firebase/auth';
import { auth } from './firebase';
import { config } from './config';

// The allowlist here only decides what the screen shows. Firestore rules
// (firestore.rules) are what actually block anyone else.
function isAllowed(user: User): boolean {
    return !!user.email && config.allowedEmails.includes(user.email.toLowerCase());
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
            showError('Sign-in failed. Please try again.');
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
        if (user && isAllowed(user)) {
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
