import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const inputStyle = { fontSize: '18pt', padding: '.25rem', margin: '.5rem 0' };
export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    render() {
        return (
            <form onSubmit={(ev) => {
                ev.preventDefault();
                this.props.onSubmit({ ...this.state })
            }}>
                <div style={{
                    backgroundColor: '#ddd',
                    padding: '1rem'
                }}>{this.props.messages.map((msg, idx) => <div key={idx}>{msg}</div>)}</div>
                <div>
                    <input
                        onChange={(ev) => {
                            this.setState({
                                email: ev.target.value
                            });
                        }}
                        style={inputStyle} placeholder="Email" type="text" name="email" /></div>
                <div>
                    <input
                        onChange={(ev) => {
                            this.setState({
                                password: ev.target.value
                            });
                        }}
                        style={inputStyle} placeholder="Password" type="password" name="password" /></div>
                <input type="submit" />
            </form>
        );
    }
}
