import { Button } from "../button/Button";
import React from "react";
import { pokemonTypes } from '../../database.js';

export class TypeList extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(type) {
        console.log("we made it to the TypeList",type);
        this.props.onAdd(type);

    }


    render(){
        let pokemon1type = pokemonTypes[0]
        console.log(pokemon1type);

        return (
            <div className="full-List">
                {pokemonTypes.map(type=>{
                    return <Button typeName={type} onClick={this.handleClick} id={type} key={type}/>
                })}           
            </div>
        )
    }
}