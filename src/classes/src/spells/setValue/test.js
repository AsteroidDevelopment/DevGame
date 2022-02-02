
import {addSpell, addRune, addValueTalisman} from '../../tests/helpers.js'

export default [
    [
        () => {
            game.compiler.activeCode().createTalisman()

            addSpell('setValue')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
            addRune(3)
            
            addSpell('cast')
            game.compiler.activeCode().addTalismanCommand('Talisman1')

            addSpell('setValue')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
            addSpell('add')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
            addRune(3)

            addSpell('cast')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
        },
        [3, 6]
    ],    
]