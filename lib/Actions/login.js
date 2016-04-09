import fb from '../firebase';
import Constants from '../Constants';
export default function login(credentials, dispatch, currentState) {
    const ref = new fb();
    const { email } = credentials;
    ref.authWithPassword(credentials, (error, auth, expires) => {
        if(error) {
            dispatch({
                type: Constants.LOGIN_ERROR,
                payload: error.toString()
            });
        } else {
            const { uid } = auth;
            dispatch({
                type: Constants.LOGIN_OK,
                payload: uid
            });
            const presenceRef = new fb(`/presence/${uid}`);
            const connectedRef = new fb('/.info/connected');
            connectedRef.on('value', (snapshot) => {
                if (snapshot.val()) {
                    presenceRef.set(true);
                    presenceRef.onDisconnect().remove();
                }
            });
            const nameRef = new fb(`/name/${uid}`);
            nameRef.on('value', (snapshot) => {
                dispatch({
                    type: Constants.LOGIN_NAME,
                    payload: snapshot.val().name
                });
            });
        }
    });

}
