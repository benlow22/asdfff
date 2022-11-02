import React from 'react';
import { TypeList } from '../typeList/TypeList';
import { TypeIndicator } from '../typeIndicators/TypeIndicators';

const initialState = {
    type1: false,
    type2: false
};

export class OpponentType extends React.Component {
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



    /* addOneState(newType) {
        console.log('weMade it to the OpponentType:', newType);
        this.setState({
            type1:newType
        })
    } */

    render() {
        return (
            <div className='type-buttons'>
                <TypeIndicator type={this.state.type1}/>
                <TypeIndicator type={this.state.type2}/>
                <TypeList onAdd={this.addType}/>
            </div>
        )
    }
}