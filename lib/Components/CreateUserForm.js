import React, { Component } from 'react';
const inputStyle = { fontSize: '24pt', padding: '.25rem', margin: '.5rem 0' };
export default class CreateUserForm extends Component {
    render() {
        return (
            <form onSubmit={(ev) => {
                ev.preventDefault();
            }}>
                <div><input style={inputStyle} placeholder="Username" type="text" name="username" /></div>
                <div><input style={inputStyle} placeholder="Password" type="password" name="password" /></div>
                <div><input style={inputStyle} placeholder="Confirm password" type="password" name="password_confirm" /></div>
            </form>
        );
    }
}
