import Constants from '../Constants';
export default function names(state = { }, action) {
    const { payload, type } = action;

    switch(type) {
        case Constants.NAME_ADDED:
        case Constants.NAME_CHANGED:
            const { key, val } = payload;
            const { name } = val;
            return Object.assign({}, state, { [`${key}`]: name });
    }
    return state;
}
