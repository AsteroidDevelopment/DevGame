import {addSpell, addRune} from '../../tests/helpers.js'

export default [
    [
        () => {
            addSpell('cast')
            addSpell('add')
            addRune('a')
            addRune('a')
        },
        ["aa"]
    ],
    
    [
        () => {
            addSpell('cast')
            addSpell('add')
            addSpell('add')
            addRune('a')
            addRune('a')
            addRune('a')
        },
        ["aaa"]
    ],
    
    [
        () => {
            addSpell('cast')
            addSpell('add')
            addRune('a')
            addSpell('add')
            addRune('a')
            addRune('a')
        },
        ["aaa"]
    ],
    
    [
        () => {
            addSpell('cast')
            addSpell('add')
            addSpell('add')
            addRune('a')
            addRune('a')
            addSpell('add')
            addRune('a')
            addRune('a')
        },
        ["aaaa"]
    ],
    
    
    [
        () => {
            addSpell('cast')
            addSpell('add')
            addRune(1)
            addRune(1)
        },
        [2]
    ],
    
    [
        () => {
            addSpell('cast')
            addSpell('add')
            addRune('a')
            addRune(1)
        },
        ['a1']
    ],

    [
        () => {
            addSpell('cast')
            addSpell('add')
            addRune(1)
            addRune('a')
        },
        ['1a']
    ],

    
    [
        () => {
            addSpell('cast')
            addSpell('add')
            addSpell('add')
            addRune(1)
            addRune(1)
            addRune('a')
        },
        ['2a']
    ],

    
    [
        () => {
            addSpell('cast')
            addSpell('add')
            addRune(1)
            addSpell('add')
            addRune(1)
            addRune('a')
        },
        ['11a']
    ],
    
    [
        () => {
            addSpell('cast')
            addSpell('add')
            addRune('true')
            addRune('true')
        },
        ['true']
    ],

    [
        () => {
            addSpell('cast')
            addSpell('add')
            addRune('false')
            addRune('true')
        },
        ['false']
    ],
    
    [
        () => {
            addSpell('cast')
            addSpell('add')
            addRune('false')
            addRune('false')
        },
        ['false']
    ],
    
    [
        () => {
            addSpell('cast')
            addSpell('add')
            addRune('a')
            addRune('false')
        },
        ['afalse']
    ],
]