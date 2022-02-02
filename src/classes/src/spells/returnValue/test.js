import { addSpell, addRune, addValueTalisman } from '../../tests/helpers.js'

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

    [
        () => {
            game.compiler.createRitual(0)

            addSpell('cast')
            game.compiler.activeCode().addCodeCommand('Ritual2')

            game.compiler.switchCode('Ritual2')

            addSpell('ifThen')
            addRune('true')
            addSpell('returnValue')
            addRune('a')

            addSpell('returnValue')
            addRune('b')

            addSpell('returnValue')
            addRune('c')

        },
        ['a']
    ],

    [
        () => {
            game.compiler.createRitual(0)

            addSpell('cast')
            game.compiler.activeCode().addCodeCommand('Ritual2')

            game.compiler.switchCode('Ritual2')

            game.compiler.activeCode().createTalisman()

            addSpell('setValue')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
            addRune(1)

            addSpell('ifThen')
            addRune('false')
            addSpell('returnValue')
            addRune('z')

            addSpell('whileSpell')
            addRune('true')

                addSpell('add')
                addSpell('add')

                    addSpell('ifThen')
                    addSpell('equal')
                    game.compiler.activeCode().addTalismanCommand('Talisman1')
                    addRune(4)
                    addSpell('returnValue')
                    addSpell('add')
                    addRune('e')
                    game.compiler.activeCode().addTalismanCommand('Talisman1')

                    addSpell('setValue')
                    game.compiler.activeCode().addTalismanCommand('Talisman1')
                    addSpell('add')
                    game.compiler.activeCode().addTalismanCommand('Talisman1')
                    addRune(1)

                    addSpell('cast')
                    addSpell('add')
                    addRune('n')
                    game.compiler.activeCode().addTalismanCommand('Talisman1')

            addSpell('returnValue')
            addRune('b')

            addSpell('returnValue')
            addRune('c')

        },
        ['n2', 'n3', 'n4', 'e4']
    ],

    [
        () => {
            game.compiler.createRitual(0)

            addSpell('cast')
            game.compiler.activeCode().addCodeCommand('Ritual2')

            game.compiler.switchCode('Ritual2')

            game.compiler.activeCode().createTalisman()

            addSpell('setValue')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
            addRune(1)

            addSpell('times')
            addRune(9)

            addSpell('add')
            addSpell('add')

            addSpell('ifThen')
            addSpell('equal')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
            addRune(4)
            addSpell('returnValue')
            addSpell('add')
            addRune('e')
            game.compiler.activeCode().addTalismanCommand('Talisman1')

            addSpell('setValue')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
            addSpell('add')
            game.compiler.activeCode().addTalismanCommand('Talisman1')
            addRune(1)

            addSpell('cast')
            addSpell('add')
            addRune('n')
            game.compiler.activeCode().addTalismanCommand('Talisman1')

            addSpell('returnValue')
            addRune('b')

            addSpell('returnValue')
            addRune('c')

        },
        ['n2', 'n3', 'n4', 'e4']
    ],

]