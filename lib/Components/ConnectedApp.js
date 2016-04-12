import loadApp from '../Actions/loadApp';
import addUser from '../Actions/addUser';
import getUsers from '../Actions/getUsers';
import removeUser from '../Actions/removeUser';
import login from '../Actions/login';
import setName from '../Actions/setName';
import clearEstimates from '../Actions/clearEstimates';
import estimate from '../Actions/estimate';
import watchEstimates from '../Actions/watchEstimates';
import watchNames from '../Actions/watchNames';
import watchPresence from '../Actions/watchPresence';

import { connect } from 'react-redux';
import App from './App';
export default connect(
    (state) => state,
    (dispatch) => {
        return {
            addUser: (value) => dispatch(addUser.bind(null, value)),
            clearEstimates: (value) => dispatch(clearEstimates),
            estimate: (value) => dispatch(estimate.bind(null, value)),
            getUsers: () => dispatch(getUsers),
            login: (credentials) => dispatch(login.bind(null, credentials)),
            onLoad: () => dispatch(loadApp),
            removeUser: (value) => dispatch(removeUser.bind(null, value)),
            setName: (value) => dispatch(setName.bind(null, value)),
            watchEstimates: () => dispatch(watchEstimates),
            watchNames: () => dispatch(watchNames),
            watchPresence: () => dispatch(watchPresence),
        }
    }
)(App);
