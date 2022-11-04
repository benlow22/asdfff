import React from "react";

export function StatBox (props) {
    let status = props.status;
    let multipliers = []
    if (status === 'Weak') {
        multipliers = ['2.56x', '1.60x'];
    } if (status === 'Resistant') {
        multipliers = ['0.391x', '0.625x' ]
    }
    return (
        <div className="statBox">
            <h4>{status} to </h4>
            <h5>{multipliers[0]} damage from</h5>
            <h5>{multipliers[1]} damage from</h5>
        </div>
    )
}