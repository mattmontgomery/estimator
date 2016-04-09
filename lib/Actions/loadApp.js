import Constants from '../constants';
import fb from '../firebase';

export default function loadApp(dispatch) {
    return new Promise((resolve, reject) => {
        const firebase = new fb();
        resolve({
            type: Constants.APP_LOAD
        });
    });
}
