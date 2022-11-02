import React from 'react';

export class Button extends React.Component {


    /*handleClick() {
        this.props.onClick
    }*/

    render(){
        return (
            <button 
                //onClick={this.handleClick} 
                className={this.props.typeName}>
                {this.props.typeName}
            </button>
        )
    }
}