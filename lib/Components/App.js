import React, { Component, PropTypes } from 'react';
import User from './User';
import config from '../config';
import LoginForm from './LoginForm';
import NameForm from './NameForm';
import CreateUserForm from './CreateUserForm';
const { estimates } = config;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            action: 'login'
        }
    }
    componentDidMount() {
        this.props.onLoad();
    }
    render() {
        const { users } = this.props;
        return (<div>
            <pre>{JSON.stringify(this.props)}</pre>
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
                    return (<div>{'Hello, '}{this.props.app.name}</div>);
                }
                return <NameForm onSubmit={this.props.setName} />
            })()}
            <h4>Estimate!</h4>
            <div style={{}}>
                <div style={{flex: 1}}>
                    {estimates.map((est, idx) => <span key={idx} onClick={() => { this.props.estimate(est); }}>{est}{' '}</span>)}
                </div>
            </div>
        </div>);
    }
}
