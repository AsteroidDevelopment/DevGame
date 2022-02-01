import {addSpell, addRune, addValueTalisman} from '../../tests/helpers.js'

export default [
    [
        () => {
            addSpell('cast')
            addSpell('add')
            addSpell('numberfy')
            addSpell('add')
            addSpell('wordify')
            addRune(3)
            addRune(3)
            addRune(3)
        },
        ['36']
    ],    
    [
        () => {
            addSpell('cast')
            addSpell('numberfy')
            addRune('blank')
        },
        ['0']
    ],   
    [
        () => {
            addSpell('cast')
            addSpell('numberfy')
            addRune('a')
        },
        ['1']
    ],   
    [
        () => {
            addSpell('cast')
            addSpell('numberfy')
            addValueTalisman('')
        },
        ['0']
    ],   
    [
        () => {
            addSpell('cast')
            addSpell('numberfy')
            addRune('true')
        },
        ['1']
    ],   
    [
        () => {
            addSpell('cast')
            addSpell('numberfy')
            addRune('false')
        },
        ['0']
    ],  
]