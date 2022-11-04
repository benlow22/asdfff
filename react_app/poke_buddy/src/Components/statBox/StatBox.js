import React from "react";
import { pokemonTypes, typeEffectiveness, checkTypes } from "../../database";
import { SmallButton } from "../button/SmallButton";

export function StatBox (props) {
    let type1 = 'Bug' //props.type1;        // TEST = bug
    let type2 = props.type2;
    let status = props.status;

    let multiplierLabels = []
    let multiplier1 = []
    let multiplier2 = []

    const allmultipliers = checkTypes(type1,type2);

    if (status === 'Weak') {
        multiplierLabels = ['2.56x', '1.60x'];
        multiplier1 = allmultipliers.veryWeak;
        multiplier2 = allmultipliers.weak;
    } if (status === 'Resistant') {
        multiplierLabels = ['0.391x', '0.625x' ];
        multiplier1 = allmultipliers.strong;
        multiplier2 = allmultipliers.veryStrong;
    }












    return (
        <div className="statBox">
            <h4>{status} to </h4>
            <h5>{multiplierLabels[0]} damage from</h5>
            <p>{multiplier1.map(type=>{
                return (
                    <SmallButton 
                    typeName={type}
                    />
                )
            })}</p>
            <h5>{multiplierLabels[1]} damage from</h5>
            <p>{multiplier2.map(type=>{
                return (
                    <SmallButton 
                    typeName={type}
                    />
                )
            })}</p>        </div>
    )
}
