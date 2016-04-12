import Constants from '../constants';
import fb from '../firebase';

export default function watchPresence(dispatch, currState) {
    const firebase = new fb('/name');
    firebase.on('child_added', (dataSnapshot) => {
        const val = dataSnapshot.val();
        const key = dataSnapshot.key();
        dispatch({
            type: Constants.NAME_ADDED,
            payload: { key, val }
        });
    });
    firebase.on('child_changed', (dataSnapshot) => {
        const val = dataSnapshot.val();
        const key = dataSnapshot.key();
        dispatch({
            type: Constants.NAME_CHANGED,
            payload: { key, val }
        });
    });
}
