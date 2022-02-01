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
]