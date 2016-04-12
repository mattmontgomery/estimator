import Constants from '../constants';
import fb from '../firebase';

export default function watchPresence(dispatch, currState) {
    const firebase = new fb('/presence');
    firebase.on('child_added', (dataSnapshot) => {
        const val = dataSnapshot.val();
        const key = dataSnapshot.key();
        dispatch({
            type: Constants.USER_ONLINE,
            payload: { key, val }
        });
    });
    firebase.on('child_removed', (dataSnapshot) => {
        const val = dataSnapshot.val();
        const key = dataSnapshot.key();
        dispatch({
            type: Constants.USER_OFFLINE,
            payload: { key, val }
        });
    });
}
