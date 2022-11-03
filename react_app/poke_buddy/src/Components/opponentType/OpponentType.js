import React, { useState } from 'react';
import { TypeList } from '../typeList/TypeList';
import { TypeIndicator } from '../typeIndicators/TypeIndicators';

const initialState = {
    type1: false,
    type2: false
}; 

// using useState and function class 

export function Homepage () {
    const [ type1, setType1 ] = useState('Type 1');
    const [ type2, setType2 ] = useState('Type 2');

    const handleAdd = (type) => {
        if (type1 === 'Type 1') {
            setType1(type);
        }
    }

    return (
        <div>
            <div className='opponent-Stats'>
                <TypeIndicator />
                <TypeIndicator />
            </div>
            <div className='list-Of-Buttons'>
                <TypeList onAdd={handleAdd}/>
            </div>
        </div>
    )
}

/* export class OpponentType extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            type1: 'Type 1',
            type2: 'Type 2',
            count: 1
        }
        //this.addOneState = this.addOneState.bind(this);
        this.addType = this.addType.bind(this);
        this.handleSpace = this.handleSpace.bind(this);
    }

    addType(newType) {
        
        if (!this.state.type1 || this.state.count % 2 === 1) {
            this.setState({
                type1: newType,
                count: this.state.count+1
            })

            //this.state.type1 ? this.setState({type1: newType}): this.setState({type2: newType})
        } else { 
            this.setState({
                type2:newType,
                count: this.state.count+1
            })
        }
        console.log(this.state.count)
    }

    handleSpace(e) {
        if (e.keycode === 32) {
            this.setState(initialState);

        }
    }



    * /////////
    addOneState(newType) {
        console.log('weMade it to the OpponentType:', newType);
        this.setState({
            type1:newType
        })
    } /////////*

    render() {
        let type1= this.state.type1;
        let type2= this.state.type2;    
            return (
            <div className='type-buttons'>
                <TypeIndicator type={type1}/>
                <TypeIndicator type={type2}/>
                <br></br>
                <TypeList onAdd={this.addType}/>
            </div>
        )
    }
} */