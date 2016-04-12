import {combineReducers} from 'redux';
import app from './app';
import estimates from './estimates';
import names from './names';
import users from './users';
export default combineReducers({
    app, estimates, names, users
});
