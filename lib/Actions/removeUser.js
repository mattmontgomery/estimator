import fb from '../firebase';

export default function addUser(user, dispatch, currState) {
    const { key } = user;
    const removedUser = new fb(`/users/${key}`);
    removedUser.remove();
}
