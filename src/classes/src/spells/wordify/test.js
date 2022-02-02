import {addSpell, addRune, addValueTalisman} from '../../tests/helpers.js'

export default [
    [
        () => {
            addSpell('cast')
            addSpell('add')
            addSpell('wordify')
            addRune(3)
            addRune(3)
        },
        ['33']
    ],    
    [
        () => {
            addSpell('cast')
            addSpell('add')
            addSpell('wordify')
            addRune('true')
            addRune('true')
        },
        ['truetrue']
    ],    
    [
        () => {
            addSpell('cast')
            addSpell('wordify')
            addRune('_')
        },
        ['']
    ],    
]