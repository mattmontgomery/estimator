import Constants from '../Constants';
export default function estimates(state = { }, action) {
    const { payload, type } = action;

    switch(type) {
        case Constants.ESTIMATE_ADDED:
        case Constants.ESTIMATE_CHANGED:
            const { key, val } = payload;
            return Object.assign({}, state, { [`${key}`]: val });
        case Constants.ESTIMATE_REMOVED:
            const estimates = Object.assign({}, state);
            delete estimates[payload.key];
            return estimates;
    }
    return state;
}
