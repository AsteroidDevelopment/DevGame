import {addSpell, addRune, addValueTalisman} from '../../tests/helpers.js'

export default [
    [
        () => {
            addSpell('times')
            addRune(0)
            addSpell('cast')
            addRune('a')
        },
        []
    ],    
    [
        () => {
            addSpell('times')
            addRune(3)
            addSpell('cast')
            addRune('a')
        },
        ['a', 'a', 'a']
    ],   
]