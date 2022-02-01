import {addSpell, addRune, addValueTalisman} from '../../tests/helpers.js'

export default [
    [
        () => {
            addSpell('cast')
            addSpell('ifThen')
            addRune('true')
            addSpell('cast')
            addRune('a')
        },
        ['a', 'a']
    ],    
    [
        () => {
            addSpell('cast')
            addSpell('ifThen')
            addRune('false')
            addSpell('cast')
            addRune('a')
        },
        ['false']
    ],    
]