class Compiler {
    constructor() {
        this.codes = {
            main: new Code('main', 0)
        }
        this.output = []
        this.activeCodeName = 'main'

        this.runeFilter = 'all'
        this.spellFilter = 'all'


        this.runeKinds = ['all']
        this.spellCategories = ['all']

        runes.forEach((rune) => {
            if (!this.runeKinds.includes(rune.kind)) {
                this.runeKinds.push(rune.kind)
            }
        })

        spells.forEach((spell) => {
            spell.categories.forEach((c) => {
                if (!this.spellCategories.includes(c)) {
                    this.spellCategories.push(c)
                }
            })
        })

    }

    createRitual() {
        let num = Object.entries(this.codes).length + 1
        let name = prompt("Please enter ritual name", `Ritual${num}`);
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

            c.print(this)
        })


        let runeElem = document.querySelector('#runes .screen')
        let spellsElem = document.querySelector('#spells .screen')
        runeElem.innerHTML = ""
        spellsElem.innerHTML = ""

        let showRunes = this.runeFilter === 'all' ? runes : runes.filter( (r) => r.kind === this.runeFilter)
        let showSpells = this.spellFilter === 'all' ? spells : spells.filter( (r) => r.categories.includes(this.spellFilter))
        showRunes.forEach((rune) => {
            runeElem.innerHTML += `<span data-value="${rune.value}"  data-kind="rune"  class="${rune.kind} codeButton">${rune.value}</span>`
        })
        showSpells.forEach((spell) => {
            spellsElem.innerHTML += `<span data-value="${spell.name}" data-kind="spell" class="${spell.category} codeButton" >${spell.display}</span>`
        })

        let runeKindElem = document.querySelector('#runes .subbar')
        let spellCatElem = document.querySelector('#spells .subbar')
        runeKindElem.innerHTML = ""
        spellCatElem.innerHTML = ""

        this.runeKinds.forEach((kind) => {
            runeKindElem.innerHTML += `<span data-value="${kind}"  data-kind="rune-filter"   class="codeButton ${this.runeFilter === kind ? 'activeFilter' : ""}">${kind}</span>`
        })
        this.spellCategories.forEach((category) => {
            spellCatElem.innerHTML += `<span data-value="${category}"  data-kind="spell-filter"   class="codeButton ${this.spellFilter === category ? 'activeFilter' : ""}">${category}</span>`
        })


        let buttons = document.querySelectorAll('.codeButton')
        buttons.forEach((b) => b.addEventListener("click", addButton))
    }

    run() {
        let output = document.getElementById('output')
        output.innerHTML = ``
        this.output = []
        this.codes['main'].run(compiler)
    }

    clearAll() {
        let codes = Object.entries(this.codes).map((c) => c[1]).map(c => c.clear())
    }

    reset() {
        this.codes = {
            main: new Code('main', 0)
        }
        this.activeCodeName = 'main'
        this.print()
    }


    setRuneFilter(kind) {
        this.runeFilter = kind
        this.print()
    }
    setSpellFilter(category) {
        this.spellFilter = category
        this.print()
    }

}
