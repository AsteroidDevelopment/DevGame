import {addSpell, addRune, addValueTalisman} from '../../tests/helpers.js'

export default [
    [
        () => {
            addSpell('cast')
            addSpell('divide')
            addRune(6)
            addRune(3)
        },
        [2]
    ],    
    [
        () => {
            addSpell('cast')
            addSpell('divide')
            addRune(6)
            addRune(1)
        },
        [6]
    ],    
    [
        () => {
            addSpell('cast')
            addSpell('divide')
            addRune(5)
            addRune(6)
        },
        [0]
    ],    
]