import React, { Component } from 'react';
const inputStyle = { fontSize: '24pt', padding: '.25rem', margin: '.5rem 0' };
export default class CreateUserForm extends Component {
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
                const { password, password_confirm } = this.state;
                if(password === password_confirm) {
                    this.props.onSubmit({ ...this.state })
                }
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
                <div>
                    <input
                        onChange={(ev) => {
                            this.setState({
                                password_confirm: ev.target.value
                            });
                        }}
                        style={inputStyle} placeholder="Password (confirm)" type="password" /></div>
                <input type="submit" />
            </form>
        );
    }
}
