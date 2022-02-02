import {addSpell, addRune, addValueTalisman} from '../../tests/helpers.js'

export default [
    [
        () => { 
            game.compiler.activeCode().createTalisman()

            addSpell('setValue')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
            addRune(0)

            addSpell('whileSpell')
            addRune('true')
            addSpell('setValue')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
            addSpell('add')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
            addRune(1)
            
            addSpell('cast')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
        },
        [1028]
    ],    

    
    [
        () => { 
            game.compiler.activeCode().createTalisman()
            game.compiler.activeCode().createTalisman()

            addSpell('setValue')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
            addRune(9)
            
            addSpell('setValue')
            game.compiler.activeCode().addTalismanCommand('Talisman2')
            addRune('a')


            addSpell('whileSpell')
            addSpell('more')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
            addRune(1)

            addSpell('add')

            addSpell('setValue')
            game.compiler.activeCode().addTalismanCommand('Talisman2')
            addSpell('add')
            game.compiler.activeCode().addTalismanCommand('Talisman2')
            addRune('a')
            
            addSpell('setValue')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
            addSpell('subtract')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
            addRune('1')
            
            addSpell('cast')
            game.compiler.activeCode().addTalismanCommand('Talisman2')
            addSpell('cast')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
        },
        ['aaaaaaaaa', 1]
    ],    

]