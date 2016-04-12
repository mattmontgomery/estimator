import React, { Component } from 'react';

export default class OnlineUsers extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#f0faff', padding: '.25rem 1rem 1rem'}}>
                {(() => Object.keys(this.props.users).length > 0 ? <h4>{'Online users'}</h4> : null)()}
                {Object.keys(this.props.users).map((id) => {
                    const estimate = this.props.estimates[id];
                    const name = this.props.names[id]
                    return <div key={id}>{name}: {estimate !== undefined ? estimate : '-'}</div>;
                })}
            </div>
        );
    }
}
