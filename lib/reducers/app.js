import Constants from '../Constants';
export default function app(state = { authenticated: false, messages: [], name: '', uid: null}, action) {
    switch(action.type) {
        case Constants.APP_AUTH:
            return Object.assign({}, state, {
                authenticated: true
            });
        case Constants.LOGIN_ERROR:
            return Object.assign({}, state, {
                messages: [action.payload]
            });
        case Constants.LOGIN_OK:
            return Object.assign({}, state, {
                authenticated: true,
                messages: [],
                uid: action.payload
            });
        case Constants.LOGIN_NAME:
            return Object.assign({}, state, {
                name: action.payload
            });
        default:
            return state;
    }
};
