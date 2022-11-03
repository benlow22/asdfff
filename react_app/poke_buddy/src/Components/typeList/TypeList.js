import { Button } from "../button/Button";
import React from "react";
import { pokemonTypes } from '../../database.js';


export function TypeList (props) {


    const handleClick = ({target}) => {
        const type = target.value;
        props.onAdd(type);
    }

    return (
        <div className="full-List">
            {pokemonTypes.map(type=>{
                return (
                    <Button 
                        typeName={type} 
                        onClick={handleClick} 
                        //id={type} 
                        //key={type}
                        value={type}
                    />
                )
            })}           
        </div>
    )
}



/* export class TypeList extends React.Component {
    constructor(props) {        // consturctor needed because handleClick needed to be bound since it is passed down 
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(type) {
        this.props.onAdd(type);
    }

    render(){
        return (
            <div className="full-List">
                {pokemonTypes.map(type=>{
                    return <Button typeName={type} onClick={this.handleClick} id={type} key={type}/>
                })}           
            </div>
        )
    }
}*/