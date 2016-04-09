import Constants from '../constants';
import fb from '../firebase';

export default function setName(name, dispatch, currentState) {
    const ref = new fb(`/name/${currentState().app.uid}`);
    ref.set(name);
}
