import {addSpell, addRune, addValueTalisman} from '../../tests/helpers.js'

export default [
    [
        () => {
            addSpell('ifElse')
            addRune('true')
            addSpell('cast')
            addRune('a')
            addSpell('cast')
            addRune('b')
        },
        ['a']
    ], 

    [
        () => {
            addSpell('ifElse')
            addRune('false')
            addSpell('cast')
            addRune('a')
            addSpell('cast')
            addRune('b')
        },
        ['b']
    ],  
    
    [
        () => {
            addSpell('ifElse')
            addRune('true')
            addSpell('cast')
            addRune('a')
            addSpell('cast')
            addRune('b')
        },
        ['a']
    ],  

    [
        () => {
            addSpell('cast')
            addSpell('ifElse')
            addRune('true')
            addRune('a')
            addRune('b')
        },
        ['a']
    ],     
    
    [
        () => {
            addSpell('ifElse')
            addRune('true')
            addSpell('ifElse')
            addRune('false')
            addSpell('cast')
            addRune('b')
            addSpell('cast')
            addRune('c')
            addSpell('cast')
            addRune('d')
        },
        ['c']
    ],      
]