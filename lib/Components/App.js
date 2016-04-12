import React, { Component, PropTypes } from 'react';
import User from './User';
import config from '../config';
const { estimates } = config;
import LoginForm from './LoginForm';
import NameForm from './NameForm';
import CreateUserForm from './CreateUserForm';
import Estimater from './Estimater';
import OnlineUsers from './OnlineUsers';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            action: 'login'
        }
    }
    componentDidMount() {
        this.props.onLoad();
        this.props.watchEstimates();
        this.props.watchNames();
        this.props.watchPresence();
    }
    render() {
        const { users } = this.props;
        return (
            <div style={{fontFamily: 'Helvetica Neue'}}>
                {(() => {
                    if(this.props.app.authenticated) { return; }
                    return (<strong onClick={() => { this.setState({ action: 'createUser' }); }}>New user?</strong>);
                })()}
                {(() => {
                    if(this.props.app.authenticated) { return; }
                    switch(this.state.action) {
                        case 'createUser':
                            return <CreateUserForm onSubmit={this.props.addUser} messages={this.props.app.messages} />;
                        case 'login':
                            return <LoginForm  onSubmit={this.props.login} messages={this.props.app.messages} />;
                    }
                })()}
                {(() => {
                    if(!this.props.app.authenticated) { return; }
                    if(this.props.app.name) {
                        return;
                    }
                    return <NameForm onSubmit={this.props.setName} />;
                })()}
                <OnlineUsers estimates={this.props.estimates} names={this.props.names} users={this.props.users} />
                <div style={{margin: '1rem 0'}}>
                    <button
                        onClick={this.props.clearEstimates}
                        style={{
                            backgroundColor: '#aaddff',
                            border: '1px solid #ddd',
                            cursor: 'pointer',
                            display: 'block',
                            fontSize: '12pt',
                            fontWeight: 'bold',
                            padding: '1rem',
                        }}
                    >Clear estimates</button>
                </div>
                <h4>{'Estimate!'}</h4>
                <Estimater estimates={estimates} onEstimate={(est) => { this.props.estimate(est); }}/>
            </div>
        );
    }
}
