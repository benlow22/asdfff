import React from 'react';


export function Button (props) {
 
    const handleAddType = ({target}) => {
        const type = target.value     // get value from button clicked
        props.onClick(type)
    }
    
    return (
        <button 
            //onClick={this.handleClick}
            type="submit"
            className={props.typeName} 
            value={props.typeName} 
            onClick={handleAddType}>
            {props.typeName}
        </button>
    )
}

/* export class Button extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddType = this.handleAddType.bind(this);
    }


    /* ////// handleClick() {
        this.props.onClick
    } ////// * /

    handleAddType(e) {
        const type = e.target.value     // get value from button clicked
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
}*/