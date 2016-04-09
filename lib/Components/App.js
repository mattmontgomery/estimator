import React, { Component, PropTypes } from 'react';
import User from './User';
import config from '../config';
import LoginForm from './LoginForm';
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
        this.props.onLoad().then(() => {
            this.props.getUsers();
        });
    }
    render() {
        const { users } = this.props;
        return (<div>
            <pre>{JSON.stringify(this.props)}</pre>
            <strong onClick={() => {
                    this.setState({
                        action: 'createUser'
                    });
                }}>New user?</strong>
            {(() => {
                switch(this.state.action) {
                    case 'createUser':
                        return <CreateUserForm onSubmit={this.props.addUser}/>;
                    case 'login':
                        return <LoginForm  onSubmit={this.props.login} messages={this.props.app.messages}/>;
                }
            })()}

            <div>
                <h4>Enter your name</h4>
                <form onSubmit={(ev) => {
                    ev.preventDefault();
                    this.props.addUser(this.state.name);
                    }}>
                    <input
                        onChange={(ev) => {
                            this.setState({
                                name: ev.target.value
                            });
                        }}
                        type="text"
                    />
                    <input type="submit" />
                </form>
            </div>
            <div style={{
                border: '1px solid #ddd',
                color: '#444',
                backgroundColor: '#eee',
                padding: '.5rem'
            }}>
                {Object.keys(users).map((key, idx) => <User key={idx} user={users[key]} onRemove={this.props.removeUser} />)}
            </div>
            <h4>Estimate!</h4>
            <div style={{}}>
                <div style={{flex: 1}}>
                    {estimates.map((est, idx) => <span key={idx} onClick={() => { this.props.estimate(est); }}>{est}{' '}</span>)}
                </div>
            </div>
        </div>);
    }
}
