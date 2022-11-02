import React from "react";

export class TypeIndicator extends React.Component {
    constructor(props) {
        super(props)

    }
    render () {
        let text = this.props.typeName;
        return (
            <button 
                className='type-indicator' disabled>
                    {this.props.type}
            </button>
        )
    }
}
