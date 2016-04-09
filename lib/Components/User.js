import React, { Component, PropTypes } from 'react';

export default class User extends Component {
    render() {
        const { name } = this.props.user;
        return (
            <div style={{display: 'flex'}}>
                <div
                    onClick={() => { this.props.onRemove(this.props.user); }}
                    style={{flex: 0, paddingRight: '1rem'}}>{'❌'}</div>
                <div style={{flex: 1}}>{name}</div>
            </div>);
    }
}
