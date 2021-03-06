import {addSpell, addRune, addValueTalisman} from '../../tests/helpers.js'

export default [
    [
        () => {
            game.compiler.activeCode().createTalisman()
            game.compiler.activeCode().createTalisman()

            addSpell('setValue')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
            addValueTalisman('asdf')
            
            addSpell('setValue')
            game.compiler.activeCode().addTalismanCommand('Talisman2')
            addSpell('pop')
            game.compiler.activeCode().addTalismanCommand('Talisman1')

            addSpell('cast')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
            addSpell('cast')
            game.compiler.activeCode().addTalismanCommand('Talisman2')
        },
        ['asd', 'f']
    ],  
    [
        () => {
            game.compiler.activeCode().createTalisman()
            game.compiler.activeCode().createTalisman()

            addSpell('setValue')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
            addSpell('numberfy')
            addValueTalisman('1111')
            
            addSpell('setValue')
            game.compiler.activeCode().addTalismanCommand('Talisman2')
            addSpell('pop')
            game.compiler.activeCode().addTalismanCommand('Talisman1')

            addSpell('cast')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
            addSpell('cast')
            game.compiler.activeCode().addTalismanCommand('Talisman2')
        },
        ['111', '1']
    ],       
]