import Talisman from './talisman.js'
import ParsedBufferNode from './parsedBufferNode.js'

export default class Code {
    constructor(name = "", numberIngredients = 0) {
        this.name = name
        this.numberIngredients = numberIngredients

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
        let num = Object.entries(this.talismans).length + 1
        //let name = `Talisman${num}` 
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
        this.addCommand( game.compiler.codes[name] )
    }

    addIngredientCommand(index) {
        this.addCommand({ kind: 'ingredient', index: index })
    }



    /*

    Parse & execution functions

    */
    parse(args) {
        this.parsedBuffer = []
        //use an object with a stupid variable to keep count through the different parses; using integer doesn't work for Javascript reasons
        let pos = {i:0}

        while (pos.i < this.buffer.length) {
            this.parsedBuffer.push(ParsedBufferNode.parse(this.buffer, args, pos))
            pos.i += 1
        }

        return this.parsedBuffer
    }
    
    execute(args) {
        this.parse(args)
        //Keep track of the last value to "return" it.
        let lastValue = null
        let status = {halt: false}
        this.parsedBuffer.forEach((a) => {
            if(!status.halt) {
                lastValue = a.execute(this, args, status)
            }
        })
        return status.halt || lastValue
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
            for (let i = 0; i < this.numberIngredients; i++) {
                ingredientElem.innerHTML += `<span data-value="${i}"  data-kind="ingredient" class="codeButton" >Arg ${i + 1}</span>`
            }

        }

        //We added buttons above, so we need to attach the event listeners.
        game.printButtons()
    }
}








