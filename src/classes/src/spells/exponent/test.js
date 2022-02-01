import {addSpell, addRune, addValueTalisman} from '../../tests/helpers.js'

export default [
    [
        () => {
            addSpell('cast')
            addSpell('exponent')
            addRune(3)
            addRune(2)
        },
        [9]
    ],    
    [
        () => {
            addSpell('cast')
            addSpell('exponent')
            addRune(1)
            addRune(6)
        },
        [1]
    ],    
    [
        () => {
            addSpell('cast')
            addSpell('exponent')
            addRune(0)
            addRune(8)
        },
        [0]
    ],   
    [
        () => {
            addSpell('cast')
            addSpell('exponent')
            addRune(8)
            addRune(0)
        },
        [1]
    ],     
    [
        () => {
            addSpell('cast')
            addSpell('exponent')
            addRune(6)
            addRune(3)
        },
        [216]
    ],   
]