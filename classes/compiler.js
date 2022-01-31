class Compiler {
    constructor() {
        this.codes = {
            main: new Code('main', 0)
        }
        this.output = []
        this.activeCodeName = 'main'


    }

    createRitual() {
        let num = Object.entries(this.codes).length + 1
        let name = prompt("Please enter ritual name", `Ritual ${num}`);
        let ingredientCount = prompt("Please enter ingredient count");

        let c = new Code(name, Number.parseInt(ingredientCount))
        this.codes[name] = c
        this.print()
    }

    switchCode(value) {
        this.activeCodeName = value
        this.print()
    }

    activeCode() {
        return this.codes[this.activeCodeName]
    }

    print() {
        let codes = Object.entries(this.codes).map((c) => c[1])

        let insertCodes = document.getElementById('rituals')
        let headings = document.getElementById('ritual-selection')
        let docSpaces = document.getElementById('ritual-space')

        headings.innerHTML = ""
        docSpaces.innerHTML = ""
        insertCodes.innerHTML = ""

        codes.forEach(c => {
            headings.innerHTML += `<h3 data-kind="compiler-switch" data-value=${c.name} class="codeButton ${this.activeCodeName === c.name ? 'activeCode' : ""}">${c.name}</h3>`
            docSpaces.innerHTML += `<div id="code-${c.name}" class="code ${this.activeCodeName === c.name ? 'activeCode' : ""}"></div>`
            insertCodes.innerHTML += `<span data-value="${c.name}" data-kind="compiler" class="codeButton" >${c.name}</span>`

            c.print(this)
        })

        let buttons = document.querySelectorAll('.codeButton')
        buttons.forEach((b) => b.addEventListener("click", addButton))



    }



}
