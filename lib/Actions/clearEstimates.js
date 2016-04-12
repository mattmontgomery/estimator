import fb from '../firebase';

export default function clearEstimates(dispatch) {
    const ref = new fb(`/estimate`);
    ref.remove();
}
