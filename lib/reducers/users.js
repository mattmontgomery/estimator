import Constants from '../Constants';
export default function app(state = {}, action) {
    switch(action.type) {
        case Constants.USER_ADDED:
            return Object.assign({}, state, { [`${action.payload.key}`]: action.payload });
        case Constants.USER_REMOVED:
            const users = Object.assign({}, state);
            delete users[action.payload.key];
            return users;
        default:
            return state;
    }
};
