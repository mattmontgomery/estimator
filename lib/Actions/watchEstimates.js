import Constants from '../constants';
import fb from '../firebase';

export default function watchEstimates(dispatch, currState) {
    const firebase = new fb('/estimate');
    firebase.on('child_added', (dataSnapshot) => {
        const val = dataSnapshot.val();
        const key = dataSnapshot.key();
        dispatch({
            type: Constants.ESTIMATE_ADDED,
            payload: { key, val }
        });
    });
    firebase.on('child_changed', (dataSnapshot) => {
        const val = dataSnapshot.val();
        const key = dataSnapshot.key();
        dispatch({
            type: Constants.ESTIMATE_CHANGED,
            payload: { key, val }
        });
    });
    firebase.on('child_removed', (dataSnapshot) => {
        const val = dataSnapshot.val();
        const key = dataSnapshot.key();
        dispatch({
            type: Constants.ESTIMATE_REMOVED,
            payload: { key, val }
        });
    });
}
