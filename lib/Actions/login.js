import fb from '../firebase';
import Constants from '../Constants';
export default function login(credentials, dispatch) {
    const ref = new fb();
    ref.authWithPassword(credentials, (error, auth, expires) => {
        if(error) {
            dispatch({
                type: Constants.LOGIN_ERROR,
                payload: error.toString()
            });
        }
    });

}
