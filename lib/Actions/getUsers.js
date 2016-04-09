import Constants from '../constants';
import fb from '../firebase';

export default function getUsers(dispatch, currState) {
    const firebase = new fb('/users');
    firebase.on('child_added', (dataSnapshot) => {
        const { name } = dataSnapshot.val();
        const key = dataSnapshot.key();
        dispatch({
            type: Constants.USER_ADDED,
            payload: { name, key }
        });
    });
    firebase.on('child_removed', (dataSnapshot) => {
        const { name } = dataSnapshot.val();
        const key = dataSnapshot.key();
        dispatch({
            type: Constants.USER_REMOVED,
            payload: { name, key }
        });
    });
}
