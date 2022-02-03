import Code from './code.js'


export default class Compiler {
    constructor(game) {
        this.codes = {
            main: new Code('main', 0)
        }
        this.output = []
        this.activeCodeName = 'main'
    }


    /*

    Basic Set/Get Functions

    */
    switchCode(value) {
        this.activeCodeName = value
        this.print()
    }

    activeCode() {
        return this.codes[this.activeCodeName]
    }

    clearOutput() {
        let output = document.getElementById('output')
        output.innerHTML = ``
        this.output = []
    }

    /*

    Utility functions

    */
    //Calls 'clear' on all codes.
    clearAll() {
        this.clearOutput()
        Object.entries(this.codes).map((c) => c[1]).map(c => c.clear())
    }

    //Completly resets the compiler to the default value.
    reset() {
        this.codes = {
            main: new Code('main', 0)
        }
        this.activeCodeName = 'main'
        this.print()
    }

    //Prompts for and adds a new ritual.
    createRitual(ingCount) {
        let num = Object.entries(this.codes).length + 1
        //let name = `Ritual${num}` 
        let name = prompt("Please enter ritual name", `Ritual${num}`);
        let ingredientCount = ingCount || ingCount === 0 ? ingCount : prompt("Please enter ingredient count");

        let c = new Code(name, Number.parseInt(ingredientCount))
        this.codes[name] = c
        this.print()
    }

    /*

    Main Functions

    */

    //Clears the output and runs the 'main' function.
    run() {
        this.clearOutput()
        
        this.codes['main'].execute()

        game.checkLevel(this.output)
    }

    //Prints the different codes to the UI in the right places, including the switchy parts, and calls the "print" on the code itself.
    print() {
        let codes = Object.entries(this.codes).map((c) => c[1])

        let insertCodes = document.querySelector('#rituals .screen')
        let headings = document.getElementById('ritual-selection')
        let docSpaces = document.getElementById('ritual-space')

        headings.innerHTML = ""
        docSpaces.innerHTML = ""
        insertCodes.innerHTML = ""

        codes.forEach(c => {
            headings.innerHTML += `<h3 data-kind="compiler-switch" data-value=${c.name} class="codeButton ${this.activeCodeName === c.name ? 'activeCode' : ""}">${c.name}</h3>`
            docSpaces.innerHTML += `<div id="code-${c.name}" class="code ${this.activeCodeName === c.name ? 'activeCode' : ""}"></div>`

            if (c.name !== 'main') { insertCodes.innerHTML += `<span data-value="${c.name}" data-kind="compiler" class="codeButton" >${c.name}</span>` }

            c.print()
        })
    }



}
