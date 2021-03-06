import fb from '../firebase';
import Constants from '../constants';

export default function addUser(credentials, dispatch) {
    const ref = new fb();
    ref.createUser(credentials, (error, userData) => {
        if(error) {
            dispatch({
                type: Constants.LOGIN_ERROR,
                payload: error.toString()
            });
        }
    });
}
