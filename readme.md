MagicLang
===
Simple, functional language
All functions have explicit static argument count requirements


Terminology
---
Runes- basic character constants, weakly typed
Talismans- variables, dynamically & weakly typed
Types- letter, number, truth, blank (string/char, int, bool, null)

Spells- built-in functions
Rituals- custom functions
Ingredients- arguments



Compiling/Running
---
Step 1. User entry creates an array of objects on compiler object.
ex. [ castSpell addSpell aRune bRune wordifySpell cRune dRune castSpell aRune]

Step 2. The array is parsed into a node tree after every user entry (mostly for printing purposes)
ex. 
[
    Node{
        spell: cast
        args: [
            Node{
                spell: add
                args: [aRune, bRune]
            },
            Node{
                spell: wordify
                args: [cRune]
            },
            dRune
        ]
    },
    Node{
        spell: cast
        args: [aRune]
    }
]

This creates an array of nodes which are then executed accordingly on compiler.run(), starting with the first.
ex. [Node{}, Node{}]




Compiler Object
---
Controls Rituals (custom functions), output, and execution
Rituals contain the individual code instructions and talisman data (variables)


TODO
Missing Language Fetures
====
spells- exact(equal but check type) getType(return number, letter, truth, blank)

Levels- unlocks, categories, level select, hints
Spells- display argument hints
Entering- able to highlight/go back/move cursor