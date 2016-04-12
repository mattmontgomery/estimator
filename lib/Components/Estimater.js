import React, { Component } from 'react';

export default class Estimater extends Component {
    render() {
        return(
            <div style={{}}>
                <div style={{flex: 1}}>
                    {this.props.estimates.map((est, idx) => <span key={idx} onClick={() => { this.props.onEstimate(est); }}>{est}{' '}</span>)}
                </div>
            </div>
        );
    }
}
