import {addSpell, addRune, addValueTalisman} from '../../tests/helpers.js'

export default [
    [
        () => {
            addSpell('cast')
            addSpell('multiply')
            addRune(3)
            addRune(3)
        },
        [9]
    ],    
    [
        () => {
            addSpell('cast')
            addSpell('multiply')
            addRune(0)
            addRune(3)
        },
        [0]
    ],  
    [
        () => {
            addSpell('cast')
            addSpell('multiply')
            addSpell('multiply')
            addRune(1)
            addRune(3)
            addRune(3)
        },
        [9]
    ],  
    
    [
        () => {
            addSpell('cast')
            addSpell('multiply')
            addSpell('subtract')
            addRune(0)
            addRune(1)
            addRune(3)
        },
        [-3]
    ],  
    [
        () => {
            addSpell('cast')
            addSpell('multiply')
            addRune('a')
            addRune(3)
        },
        ['aaa']
    ],     
    [
        () => {
            addSpell('cast')
            addSpell('multiply')
            addRune('a')
            addRune('a')
        },
        ['_']
    ],
    [
        () => {
            addSpell('cast')
            addSpell('multiply')
            addRune(3)
            addRune('a')
        },
        ['_']
    ],
]