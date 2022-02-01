import {addSpell, addRune, addValueTalisman} from '../../tests/helpers.js'

export default [
    [
        () => {
            addSpell('cast')
            addSpell('or')
            addRune('true')
            addRune('true')
        },
        ['true']
    ],

    [
        () => {
            addSpell('cast')
            addSpell('or')
            addRune('false')
            addRune('true')
        },
        ['true']
    ],
    
    [
        () => {
            addSpell('cast')
            addSpell('or')
            addRune('false')
            addRune('false')
        },
        ['false']
    ],
]