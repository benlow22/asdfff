import React from "react";

export class TypeIndicator extends React.Component {

    render () {
        return (
            <button 
                className='type-indicator' disabled>
                    {this.props.type}
            </button>
        )
    }
}
