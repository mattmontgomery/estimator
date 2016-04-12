import Constants from '../constants';
import fb from '../firebase';

export default function estimate(estimate, dispatch, currentState) {
    const ref = new fb(`/estimate/${currentState().app.uid}`);
    ref.set(estimate);
}
