export default [

    {
        id: 1,
        kind: 'normal', //normal, basic, challenge, boss
        category: 'word',

        output: ['a'],

        previous: null,

        requirements: [],

        unlockAt: [['rune', 'a'], ['spell', 'cast']],
        unlockAfter: [],

        spellsAvailable: ['cast'],
        runesAvailable: ['a'],

        text: {
            name: "Casting",
            intro: "Here's the next level!",
            description: "Cast your first spell! Use the 'cast' spell on the 'a' rune.",
            hints: [
                "The 'cast' spell is under the 'spell' tabs.",
                "The blank space is where the 'a' rune goes when you click on it.",
                "The 'a' rune is back on the runes tab.",
                "Then hit run!"
            ]
        }
    },
    
    {
        id: 2,
        kind: 'basic', //normal, basic, challenge, boss
        category: 'word',

        output: ['a', 'a'],

        previous: 1,
        order: 1,

        requirements: [],

        unlockAt: [],
        unlockAfter: [['rune', 'b']],

        spellsAvailable: ['cast'],
        runesAvailable: ['a'],

        text: {
            name: "Casting II",
            intro: "Here's the next level!",
            description: "Easy enough! Now cast 2 'a's to the screen.",
            hints: [
                "Do exactly what you just did- then do it again.",
                "Each cast call can only take one rune.",
                "So you need to use two 'cast' calls- one right after the other.",
                "Newlines are created automatically- just keep clicking."
            ]
        }
    },
    
    {
        id: 3,
        kind: 'basic', //normal, basic, challenge, boss
        category: 'word',

        output: ['a', 'b', 'a'],

        previous: 1,
        order: 2,

        requirements: [],

        unlockAt: [],
        unlockAfter: [],

        spellsAvailable: ['cast'],
        runesAvailable: ['a', 'b'],

        text: {
            name: "Casting III",
            intro: "Here's the next level!",
            description: "Now you've unlocked a new rune- give that one a try.",
            hints: [
                "This time you need 3 cast spells.",
                "The order that you enter the code is the order it is is run and the way it prints out."
            ]
        }
    },
    
    {
        id: 4,
        kind: 'normal', //normal, basic, challenge, boss
        category: 'word',

        output: ['a', '1', 'a'],

        previous: 1,

        requirements: [],

        unlockAt: [],
        unlockAfter: [],

        spellsAvailable: ['cast'],
        runesAvailable: ['a', 'b', '1'],

        text: {
            name: "Casting Numbers",
            intro: "Here's the next level!",
            description: "Perfect. Now let's move onto casting some numbers. To use them, number runes work the same way- but they act different in some circumstances. This one is simple- just give it a try.",
            hints: [
                ""
            ]
        }
    },
    
    {
        id: 5,
        kind: 'boss', //normal, basic, challenge, boss
        category: 'word',

        output: ['a', 'a'],

        previous: 4,

        requirements: [],

        unlockAt: [],
        unlockAfter: [],

        spellsAvailable: ['cast'],
        runesAvailable: ['a'],

        text: {
            name: "Boss Casting",
            intro: "Here's the next level!",
            description: "Cast your first spell! Use the 'cast' spell on the 'a' rune.",
            hints: [
                "The 'cast' spell is under the 'spell' tabs.",
                "The blank space is where the 'a' rune goes when you click on it.",
                "The 'a' rune is back on the runes tab."
            ]
        }
    },























    
    {
        id: 6,
        kind: 'basic', //normal, basic, challenge, boss
        category: 'word',

        output: ['a', 'b', 'a'],

        previous: 1,
        order: 3,

        requirements: [],

        unlockAt: [],
        unlockAfter: [],

        spellsAvailable: ['cast'],
        runesAvailable: ['a', 'b'],

        text: {
            name: "Casting IV",
            intro: "Here's the next level!",
            description: "Now you've unlocked a new rune- give that one a try.",
            hints: [
                "This time you need 3 cast spells.",
                "The order that you enter the code is the order it is is run and the way it prints out."
            ]
        }
    },
    {
        id: 7,
        kind: 'basic', //normal, basic, challenge, boss
        category: 'word',

        output: ['a', 'b', 'a'],

        previous: 1,
        order: 4,

        requirements: [],

        unlockAt: [],
        unlockAfter: [],

        spellsAvailable: ['cast'],
        runesAvailable: ['a', 'b'],

        text: {
            name: "Casting V",
            intro: "Here's the next level!",
            description: "Now you've unlocked a new rune- give that one a try.",
            hints: [
                "This time you need 3 cast spells.",
                "The order that you enter the code is the order it is is run and the way it prints out."
            ]
        }
    },
    {
        id: 8,
        kind: 'challenge', //normal, basic, challenge, boss
        category: 'word',

        output: ['a', 'b', 'a'],

        previous: 1,
        order: 2,

        requirements: [],

        unlockAt: [],
        unlockAfter: [],

        spellsAvailable: ['cast'],
        runesAvailable: ['a', 'b'],

        text: {
            name: "Casting Challenge",
            intro: "Here's the next level!",
            description: "Now you've unlocked a new rune- give that one a try.",
            hints: [
                "This time you need 3 cast spells.",
                "The order that you enter the code is the order it is is run and the way it prints out."
            ]
        }
    },
    {
        id: 9,
        kind: 'challenge', //normal, basic, challenge, boss
        category: 'word',

        output: ['a', 'b', 'a'],

        previous: 1,
        order: 1,

        requirements: [],

        unlockAt: [],
        unlockAfter: [],

        spellsAvailable: ['cast'],
        runesAvailable: ['a', 'b'],

        text: {
            name: "Casting Challenge",
            intro: "Here's the next level!",
            description: "Now you've unlocked a new rune- give that one a try.",
            hints: [
                "This time you need 3 cast spells.",
                "The order that you enter the code is the order it is is run and the way it prints out."
            ]
        }
    },


        
    {
        id: 10,
        kind: 'basic', //normal, basic, challenge, boss
        category: 'word',

        output: ['a', 'b', 'a'],

        previous: 4,
        order: 3,

        requirements: [],

        unlockAt: [],
        unlockAfter: [],

        spellsAvailable: ['cast'],
        runesAvailable: ['a', 'b'],

        text: {
            name: "Casting IV",
            intro: "Here's the next level!",
            description: "Now you've unlocked a new rune- give that one a try.",
            hints: [
                "This time you need 3 cast spells.",
                "The order that you enter the code is the order it is is run and the way it prints out."
            ]
        }
    },
    {
        id: 11,
        kind: 'basic', //normal, basic, challenge, boss
        category: 'word',

        output: ['a', 'b', 'a'],

        previous: 4,
        order: 4,

        requirements: [],

        unlockAt: [],
        unlockAfter: [],

        spellsAvailable: ['cast'],
        runesAvailable: ['a', 'b'],

        text: {
            name: "Casting V",
            intro: "Here's the next level!",
            description: "Now you've unlocked a new rune- give that one a try.",
            hints: [
                "This time you need 3 cast spells.",
                "The order that you enter the code is the order it is is run and the way it prints out."
            ]
        }
    },
    {
        id: 12,
        kind: 'challenge', //normal, basic, challenge, boss
        category: 'word',

        output: ['a', 'b', 'a'],

        previous: 4,
        order: 2,

        requirements: [],

        unlockAt: [],
        unlockAfter: [],

        spellsAvailable: ['cast'],
        runesAvailable: ['a', 'b'],

        text: {
            name: "Casting Challenge",
            intro: "Here's the next level!",
            description: "Now you've unlocked a new rune- give that one a try.",
            hints: [
                "This time you need 3 cast spells.",
                "The order that you enter the code is the order it is is run and the way it prints out."
            ]
        }
    },
    {
        id: 13,
        kind: 'challenge', //normal, basic, challenge, boss
        category: 'word',

        output: ['a', 'b', 'a'],

        previous: 4,
        order: 1,

        requirements: [],

        unlockAt: [],
        unlockAfter: [],

        spellsAvailable: ['cast'],
        runesAvailable: ['a', 'b'],

        text: {
            name: "Casting Challenge",
            intro: "Here's the next level!",
            description: "Now you've unlocked a new rune- give that one a try.",
            hints: [
                "This time you need 3 cast spells.",
                "The order that you enter the code is the order it is is run and the way it prints out."
            ]
        }
    },

    
    {
        id: 14,
        kind: 'normal', //normal, basic, challenge, boss
        category: 'word',

        output: ['a', '1', 'a'],

        previous: 5,

        requirements: [],

        unlockAt: [],
        unlockAfter: [],

        spellsAvailable: ['cast'],
        runesAvailable: ['a', 'b', '1'],

        text: {
            name: "Casting Numbers",
            intro: "Here's the next level!",
            description: "Perfect. Now let's move onto casting some numbers. To use them, number runes work the same way- but they act different in some circumstances. This one is simple- just give it a try.",
            hints: [
                ""
            ]
        }
    },
    {
        id: 15,
        kind: 'normal', //normal, basic, challenge, boss
        category: 'word',

        output: ['a', '1', 'a'],

        previous: 14,

        requirements: [],

        unlockAt: [],
        unlockAfter: [],

        spellsAvailable: ['cast'],
        runesAvailable: ['a', 'b', '1'],

        text: {
            name: "Casting Numbers",
            intro: "Here's the next level!",
            description: "Perfect. Now let's move onto casting some numbers. To use them, number runes work the same way- but they act different in some circumstances. This one is simple- just give it a try.",
            hints: [
                ""
            ]
        }
    },




    {
        id: 16,
        kind: 'basic', //normal, basic, challenge, boss
        category: 'word',

        output: ['a', 'b', 'a'],

        previous: 14,
        order: 3,

        requirements: [],

        unlockAt: [],
        unlockAfter: [],

        spellsAvailable: ['cast'],
        runesAvailable: ['a', 'b'],

        text: {
            name: "Casting IV",
            intro: "Here's the next level!",
            description: "Now you've unlocked a new rune- give that one a try.",
            hints: [
                "This time you need 3 cast spells.",
                "The order that you enter the code is the order it is is run and the way it prints out."
            ]
        }
    },
    {
        id: 17,
        kind: 'basic', //normal, basic, challenge, boss
        category: 'word',

        output: ['a', 'b', 'a'],

        previous: 14,
        order: 4,

        requirements: [],

        unlockAt: [],
        unlockAfter: [],

        spellsAvailable: ['cast'],
        runesAvailable: ['a', 'b'],

        text: {
            name: "Casting V",
            intro: "Here's the next level!",
            description: "Now you've unlocked a new rune- give that one a try.",
            hints: [
                "This time you need 3 cast spells.",
                "The order that you enter the code is the order it is is run and the way it prints out."
            ]
        }
    },
    {
        id: 18,
        kind: 'challenge', //normal, basic, challenge, boss
        category: 'word',

        output: ['a', 'b', 'a'],

        previous: 14,
        order: 2,

        requirements: [],

        unlockAt: [],
        unlockAfter: [],

        spellsAvailable: ['cast'],
        runesAvailable: ['a', 'b'],

        text: {
            name: "Casting Challenge",
            intro: "Here's the next level!",
            description: "Now you've unlocked a new rune- give that one a try.",
            hints: [
                "This time you need 3 cast spells.",
                "The order that you enter the code is the order it is is run and the way it prints out."
            ]
        }
    },
    {
        id: 19,
        kind: 'challenge', //normal, basic, challenge, boss
        category: 'word',

        output: ['a', 'b', 'a'],

        previous: 14,
        order: 1,

        requirements: [],

        unlockAt: [],
        unlockAfter: [],

        spellsAvailable: ['cast'],
        runesAvailable: ['a', 'b'],

        text: {
            name: "Casting Challenge",
            intro: "Here's the next level!",
            description: "Now you've unlocked a new rune- give that one a try.",
            hints: [
                "This time you need 3 cast spells.",
                "The order that you enter the code is the order it is is run and the way it prints out."
            ]
        }
    },


    {
        id: 20,
        kind: 'basic', //normal, basic, challenge, boss
        category: 'word',

        output: ['a', 'b', 'a'],

        previous: 15,
        order: 3,

        requirements: [],

        unlockAt: [],
        unlockAfter: [],

        spellsAvailable: ['cast'],
        runesAvailable: ['a', 'b'],

        text: {
            name: "Casting IV",
            intro: "Here's the next level!",
            description: "Now you've unlocked a new rune- give that one a try.",
            hints: [
                "This time you need 3 cast spells.",
                "The order that you enter the code is the order it is is run and the way it prints out."
            ]
        }
    },
    {
        id: 21,
        kind: 'basic', //normal, basic, challenge, boss
        category: 'word',

        output: ['a', 'b', 'a'],

        previous: 15,
        order: 4,

        requirements: [],

        unlockAt: [],
        unlockAfter: [],

        spellsAvailable: ['cast'],
        runesAvailable: ['a', 'b'],

        text: {
            name: "Casting V",
            intro: "Here's the next level!",
            description: "Now you've unlocked a new rune- give that one a try.",
            hints: [
                "This time you need 3 cast spells.",
                "The order that you enter the code is the order it is is run and the way it prints out."
            ]
        }
    },
    {
        id: 22,
        kind: 'challenge', //normal, basic, challenge, boss
        category: 'word',

        output: ['a', 'b', 'a'],

        previous: 15,
        order: 2,

        requirements: [],

        unlockAt: [],
        unlockAfter: [],

        spellsAvailable: ['cast'],
        runesAvailable: ['a', 'b'],

        text: {
            name: "Casting Challenge",
            intro: "Here's the next level!",
            description: "Now you've unlocked a new rune- give that one a try.",
            hints: [
                "This time you need 3 cast spells.",
                "The order that you enter the code is the order it is is run and the way it prints out."
            ]
        }
    },
    {
        id: 23,
        kind: 'challenge', //normal, basic, challenge, boss
        category: 'word',

        output: ['a', 'b', 'a'],

        previous: 15,
        order: 1,

        requirements: [],

        unlockAt: [],
        unlockAfter: [],

        spellsAvailable: ['cast'],
        runesAvailable: ['a', 'b'],

        text: {
            name: "Casting Challenge",
            intro: "Here's the next level!",
            description: "Now you've unlocked a new rune- give that one a try.",
            hints: [
                "This time you need 3 cast spells.",
                "The order that you enter the code is the order it is is run and the way it prints out."
            ]
        }
    },
    

]