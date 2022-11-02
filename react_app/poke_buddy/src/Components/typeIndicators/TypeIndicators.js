import React from "react";

export class TypeIndicator extends React.Component {

    render () {
        return (
            <button 
                className={`type-indicator ${this.props.type}`}disabled>
                    {this.props.type}
            </button>
        )
    }
}
