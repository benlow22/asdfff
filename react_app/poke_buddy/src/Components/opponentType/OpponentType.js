import React from 'react';
import { TypeList } from '../typeList/TypeList';
import { TypeIndicator } from '../typeIndicators/TypeIndicators';
export class OpponentType extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            type1: false,
            type2: false
        }
    }

    addType(newType) {
        if (newType !== this.state.type1) {
            this.state.type1 ? this.setState({type1: newType}): this.setState({type2: newType})
        } 
    }

    render() {
        return (
            <div className='type-buttons'>
                <TypeIndicator type={this.state.type1}/>
                <TypeIndicator type={this.state.type2}/>
                <TypeList />
            </div>
        )
    }
}