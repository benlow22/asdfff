import React, { useEffect, useState } from 'react';
import { TypeList } from '../typeList/TypeList';
import { TypeIndicator } from '../typeIndicators/TypeIndicators';



// using useState and function class 

export function Homepage () {
    const [ type1, setType1 ] = useState('Type 1');
    const [ type2, setType2 ] = useState('Type 2');

    const handleAdd = (type) => {
        if (type1 === 'Type 1') {
            setType1(type);
        } else {
            if (type !== type1) {
                setType2(type)
            }
        }
    }
    
    const clearButtons = () => {
        setType1('Type 1');
        setType2('Type 2');
    }

    useEffect (()=>{
        document.addEventListener('keydown', event => {
            if(event.code === 'ShiftLeft') {
                clearButtons();
    }})
    },[]);          // use [] because you only want to add the listener once at the beginning 


    
    return (
        <div>
            <div className='opponent-Stats'>
                <TypeIndicator type={type1}/>
                <TypeIndicator type={type2}/>
            </div>
            <br/>
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