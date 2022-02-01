import Talisman from './talisman.js'
import ParsedBufferNode from './parsedBufferNode.js'

export default class Code {
    constructor(name = "", argmumentCount = 0) {
        this.name = name
        this.argmumentCount = argmumentCount

        this.talismans = {}

        this.buffer = []
        this.parsedBuffer = []

    }

    /*

    Basic Set / Get / Utility functions

    */
    backspace() {
        this.buffer = this.buffer.slice(0, -1)
        this.print()
    }

    clear() {
        this.buffer = []
        this.print()
    }

    createTalisman() {
        let num = Object.entries(code.talismans).length + 1
        let name = prompt("Please enter talisman name", `Talisman${num}`);
        let t = new Talisman(name)
        this.talismans[name] = t
        this.print()
    }

    /*

    Main add functions

    */
    addCommand(item) {
        this.buffer.push(item)
        this.print()
    }

    addTalismanCommand(index) {
        this.addCommand( this.talismans[index] )
    }

    addCodeCommand(name) {
        this.addCommand({ kind: 'ritual', name: name })
    }

    addIngredientCommand(index) {
        this.addCommand({ kind: 'ingredient', index: index })
    }



    /*

    Parse & execution functions

    */
    parse(args) {
        this.parsedBuffer = []
        let pos = {i:0}

        while (pos.i < this.buffer.length) {
            this.parsedBuffer.push(ParsedBufferNode.parse(this.buffer, args, pos))
            pos.i += 1
        }

        console.log(this.parsedBuffer)
        return this.parsedBuffer
    }
    
    execute(args) {
        this.parse(args)
        let lastValue = null
        this.parsedBuffer.forEach((a) => {
            lastValue = a.execute(this, args)
        })
        return lastValue
    }

    /*

    Print functions

    */
    print() {
        this.parse()

        let elem = document.getElementById(`code-${this.name}`)
        elem.innerHTML = ""

        this.parsedBuffer.map((parsedBufferNode) => {
            elem.innerHTML += `<div class="pbline">${parsedBufferNode.print()}</div>`
        })

        if (game.compiler.activeCodeName === this.name) {
            let talismanElem = document.querySelector('#talismans .screen')
            talismanElem.innerHTML = Object.entries(this.talismans).map((t) => `<span data-value="${t[0]}"  data-kind="talisman" class="codeButton" >${t[0]}</span>`).join("")

            let ingredientElem = document.querySelector('#ingredients .screen')
            ingredientElem.innerHTML = ""
            for (let i = 0; i < this.argmumentCount; i++) {
                ingredientElem.innerHTML += `<span data-value="${i}"  data-kind="ingredient" class="codeButton" >Arg ${i + 1}</span>`
            }

        }
    }
}










/* ===========================

DOCS

=========================*/

//Buffer stores an array of objects that the user inputs.
//ex. [ SpellX SpellY Rune1 Rune2 SpellZ Rune3 Rune4 SpellZ Rune1]


/*
ParsedBuffer is an array of ParsedBufferNodes-
ParsedBufferNodes are a recursive data structure which is the above buffer split up in the actual spell/args pairing
PBN are a single function call all the way to the base arguments- representing a single "line" of code.

ex. 
[
    PRN{
        spell: SpellX
        args: [
            PRN{
                spell: SpellY
                args: [Rune1, Rune2]
            },
            PRN{
                spell: SpellZ
                args: [Rune3]
            },
            Rune4
        ]
    },
    PRN{
        spell: SpellZ
        args: [Rune1]
    }
]
*/