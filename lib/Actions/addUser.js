import fb from '../firebase';

export default function addUser(email, password, dispatch) {
    const ref = new fb();
    ref.createUser({
        email: email,
        password: password
    }, (err, userData) => {

    });
}
