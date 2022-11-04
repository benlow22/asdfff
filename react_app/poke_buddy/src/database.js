export const pokemonTypes = ['Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water'];


export const keys = [
    'Digit0', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5',
    'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT',
    'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 
    'KeyZ', 'KeyX', 'KeyC' ];

export const typeEffectiveness = {Bug:[1, 1, 1, 1, 1, 0.625, 1.6, 1.6, 1, 0.625, 0.625, 1, 1, 1, 1, 1.6, 1, 1]}
/*
typeEffectiveness.Bug.map((effectiveness, index) => {
    if (effectiveness === 1) {
        pokemonTypes[index]
    }

})*/

/*
[   
    [0.391x],
    [0.625x],
    [1x],
    [1.60x],
    [2.56x]
]
*/

export const checkTypes = (state1, state2) => {
    let effectObj = { veryResistant: [],
        resistant:[],
        normal :[],
        weakTo:[],
        veryWeakTo:[]
    } 

    if (state1 === 'Type1') {
        return effectObj;
    }
    if (state2 === 'Type 2') {          // only one state
        typeEffectiveness[state1].forEach((effectiveness, index) => {
            if (effectiveness === 0.391) {
                console.log(pokemonTypes[index]);
                effectObj.veryResistant.push(pokemonTypes[index])
            } if (effectiveness === 0.625) {
                effectObj.resistant.push(pokemonTypes[index])
            } if (effectiveness === 1) {
                effectObj.normal.push(pokemonTypes[index])
            } if (effectiveness === 1.60) {
                effectObj.weakTo.push(pokemonTypes[index])
            } if (effectiveness === 2.56) {
                effectObj.veryWeakTo.push(pokemonTypes[index])
            }
        })
    }

    return effectObj;
}