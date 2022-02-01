import {addSpell, addRune, addValueTalisman} from '../../tests/helpers.js'

export default [
    [
        () => {
            addSpell('cast')
            addSpell('add')
            addRune(3)
            addRune(3)
        },
        [6]
    ],    
]