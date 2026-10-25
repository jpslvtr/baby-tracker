import { onSnapshot } from 'firebase/firestore';
import { changeMarkerRef, clientId } from './firebase';
import { updateAllEventTimes } from './timers';
import { loadWeeklyView } from './weekly';
import { loadTimeline } from './timeline';
import { refreshJsonIfVisible } from './jsonView';
import { refreshGraphIfShown } from './graphs';
import { loadVitaminDStatus } from './vitaminD';
import { refreshOngoingSleepGuard } from './entryForm';

function isViewShown(id: string): boolean {
    return (document.getElementById(id) as HTMLElement).style.display === 'block';
}

// Hidden tabs reload when they're opened, so only the visible ones refresh.
function refreshVisibleViews(): void {
    updateAllEventTimes();
    loadVitaminDStatus();
    refreshOngoingSleepGuard();
    if (isViewShown('timeline-view')) {
        loadWeeklyView();
        loadTimeline();
    }
    if (isViewShown('weekly-view')) {
        refreshJsonIfVisible();
        refreshGraphIfShown();
    }
}

// Watches the change marker that every write touches, and refreshes when
// another device (or tab) changes something.
export function startSync(): void {
    let lastNonce: string | null | undefined = undefined;

    onSnapshot(changeMarkerRef, snap => {
        if (snap.metadata.hasPendingWrites) return;
        const data = snap.data();
        const nonce = data?.nonce ?? null;

        if (lastNonce === undefined) {
            lastNonce = nonce;
            return;
        }
        if (nonce === lastNonce) return;
        lastNonce = nonce;
        if (data?.by === clientId) return;

        refreshVisibleViews();
    }, error => {
        console.error('Live updates stopped:', error);
    });
}
