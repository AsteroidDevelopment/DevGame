import {addSpell, addRune, addValueTalisman} from '../../tests/helpers.js'

export default [
    [
        () => {
            addSpell('cast')
            addSpell('truthify')
            addRune(3)
        },
        ['true']
    ],    
    [
        () => {
            addSpell('cast')
            addSpell('truthify')
            addRune('a')
        },
        ['true']
    ],    
    [
        () => {
            addSpell('cast')
            addSpell('truthify')
            addRune(0)
        },
        ['false']
    ],    
    [
        () => {
            addSpell('cast')
            addSpell('truthify')
            addRune('blank')
        },
        ['false']
    ],    
    [
        () => {
            addSpell('cast')
            addSpell('truthify')
            addValueTalisman('')
        },
        ['false']
    ] 
]