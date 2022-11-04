import React from "react";

export function StatBox (props) {
    let status = props.status;
    return (
        <div className="statBox">
            <h3>{status} to </h3>
        </div>
    )
}