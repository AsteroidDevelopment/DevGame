import {addSpell, addRune, addValueTalisman} from '../../tests/helpers.js'

export default [
    [
        () => {
            addSpell('cast')
            addSpell('subtract')
            addRune(6)
            addRune(4)
        },
        [2]
    ],    
    [
        () => {
            addSpell('cast')
            addSpell('subtract')
            addRune(4)
            addRune(6)
        },
        [-2]
    ],    
    [
        () => {
            addSpell('cast')
            addSpell('subtract')
            addRune(0)
            addRune(0)
        },
        [0]
    ],    
    [
        () => {
            addSpell('cast')
            addSpell('subtract')
            addRune(0)
            addRune(6)
        },
        [-6]
    ],    
    [
        () => {
            addSpell('cast')
            addSpell('subtract')
            addSpell('subtract')
            addRune(9)
            addRune(3)
            addRune(2)
        },
        [4]
    ],    
    [
        () => {
            addSpell('cast')
            addSpell('subtract')
            addValueTalisman('afafaf')
            addRune('a')
        },
        ['fff']
    ],  
    [
        () => {
            addSpell('cast')
            addSpell('subtract')
            addValueTalisman('afbafbafb')
            addValueTalisman('af')
        },
        ['bbb']
    ],  
]