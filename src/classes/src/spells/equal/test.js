import {addSpell, addRune, addValueTalisman} from '../../tests/helpers.js'

export default [
    [
        () => {
            addSpell('cast')
            addSpell('equal')
            addRune(3)
            addRune(3)
        },
        ['true']
    ],    
    [
        () => {
            addSpell('cast')
            addSpell('equal')
            addRune(3)
            addRune(4)
        },
        ['false']
    ],   
    [
        () => {
            addSpell('cast')
            addSpell('equal')
            addRune(4)
            addRune(3)
        },
        ['false']
    ],   
]