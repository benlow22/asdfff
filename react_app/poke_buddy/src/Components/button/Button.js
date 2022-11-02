import React from 'react';

export class Button extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddType = this.handleAddType.bind(this);
    }


    /*handleClick() {
        this.props.onClick
    }*/

    handleAddType(e) {
        const type = e.target.value
        console.log('TYPE:', type);
        this.props.onClick(type)
    }

    render(){
        return (
            <button 
                //onClick={this.handleClick}
                type="submit"
                className={this.props.typeName} 
                value={this.props.typeName} 
                onClick={this.handleAddType}>
                {this.props.typeName}
            </button>
        )
    }
}