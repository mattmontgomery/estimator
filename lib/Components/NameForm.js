import React, { Component } from 'react';
const inputStyle = { fontSize: '24pt', padding: '.25rem', margin: '.5rem 0' };
export default class CreateUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }
    render() {
        return (
            <form onSubmit={(ev) => {
                ev.preventDefault();
                this.props.onSubmit(this.state.name);
            }}>
                <div>
                    <input
                        onChange={(ev) => {
                            this.setState({
                                name: ev.target.value
                            });
                        }}
                        style={inputStyle} placeholder="Name" type="text" name="name" /></div>
                <input type="submit" />
            </form>
        );
    }
}
