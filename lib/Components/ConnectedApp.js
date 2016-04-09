import loadApp from '../Actions/loadApp';
import addUser from '../Actions/addUser';
import getUsers from '../Actions/getUsers';
import removeUser from '../Actions/removeUser';
import login from '../Actions/login';

import { connect } from 'react-redux';
import App from './App';
export default connect(
    (state) => state,
    (dispatch) => {
        return {
            onLoad: () => dispatch(loadApp),
            login: (credentials) => dispatch(login.bind(null, credentials)),
            addUser: (value) => dispatch(addUser.bind(null, value)),
            removeUser: (value) => dispatch(removeUser.bind(null, value)),
            getUsers: () => dispatch(getUsers),
        }
    }
)(App);
