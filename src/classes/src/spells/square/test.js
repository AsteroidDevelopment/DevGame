import {addSpell, addRune, addValueTalisman} from '../../tests/helpers.js'

export default [
    [
        () => {
            addSpell('cast')
            addSpell('square')
            addRune(3)
        },
        [9]
    ],    
    [
        () => {
            addSpell('cast')
            addSpell('square')
            addRune(1)
        },
        [1]
    ],    
    [
        () => {
            addSpell('cast')
            addSpell('square')
            addRune(0)
        },
        [0]
    ],    
]