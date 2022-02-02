import {addSpell, addRune, addValueTalisman} from '../../tests/helpers.js'

export default [
    [
        () => {
            game.compiler.createRitual(0)

            addSpell('cast')
            game.compiler.activeCode().addCodeCommand('Ritual2')

            game.compiler.switchCode('Ritual2')
            
            game.compiler.activeCode().createTalisman()
            game.compiler.activeCode().createTalisman()

            addSpell('setValue')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
            addRune(3)
            
            addSpell('setValue')
            game.compiler.activeCode().addTalismanCommand('Talisman2')
            addRune(5)

            addSpell('add')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
            game.compiler.activeCode().addTalismanCommand('Talisman2')

           
        },
        [8]
    ],  
    
    [
        () => {
            game.compiler.createRitual(0)

            addSpell('cast')
            game.compiler.activeCode().addCodeCommand('Ritual2')

            game.compiler.switchCode('Ritual2')
            
            game.compiler.activeCode().createTalisman()
            game.compiler.activeCode().createTalisman()

            addSpell('setValue')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
            addRune(3)
            
            addSpell('setValue')
            game.compiler.activeCode().addTalismanCommand('Talisman2')
            addRune(5)

            addSpell('add')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
            game.compiler.activeCode().addTalismanCommand('Talisman2')
            
            addSpell('returnValue')
            game.compiler.activeCode().addTalismanCommand('Talisman2')
            
           
        },
        [5]
    ],    
    [
        () => {
            game.compiler.createRitual(0)

            addSpell('cast')
            game.compiler.activeCode().addCodeCommand('Ritual2')

            game.compiler.switchCode('Ritual2')
            
            game.compiler.activeCode().createTalisman()
            game.compiler.activeCode().createTalisman()

            addSpell('setValue')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
            addRune(3)
            
            addSpell('setValue')
            game.compiler.activeCode().addTalismanCommand('Talisman2')
            addRune(5)

            addSpell('add')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
            game.compiler.activeCode().addTalismanCommand('Talisman2')
            
            addSpell('returnValue')
            game.compiler.activeCode().addTalismanCommand('Talisman2')
            
            addSpell('returnValue')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
           
        },
        [5]
    ],  
    
]