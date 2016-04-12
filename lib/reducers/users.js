import Constants from '../Constants';
export default function app(state = {}, action) {
    const { payload, type } = action;
    switch(type) {
        case Constants.USER_ONLINE:
            return Object.assign({}, state, { [`${payload.key}`]: payload.val });
        case Constants.USER_OFFLINE:
            const users = Object.assign({}, state);
            delete users[payload.key];
            return users;
        default:
            return state;
    }
};
