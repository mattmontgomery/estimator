import Constants from '../Constants';
export default function app(state = { authenticated: false, messages: []}, action) {
    switch(action.type) {
        case Constants.APP_AUTH:
            return {
                authenticated: true
            }
        case Constants.LOGIN_ERROR:
            return {
                messages: [action.payload]
            }
        default:
            return state;
    }
};
