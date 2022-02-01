import Compiler from './compiler.js'

import Rune from './rune.js'
import Spell from './spell.js'
import levels from '../dictionaries/levels.js'

import { changeToolbar } from '../ui/ui.js'

//Largely deals with UI and master data holding (levels, spells, and runes)

export default class Game {
    constructor() {
        game = this

        this.compiler = new Compiler(this)
        
        this.runeFilter = 'all'
        this.spellFilter = 'all'

        this.runes = Rune.getRunes()
        this.runeKinds = Rune.getRuneKinds()
        
        this.spells = Spell.getSpells()
        this.spellCategories = Spell.getSpellCategories()

        this.levels = levels
        this.currentLevel = 0
    }

    
    /*

    Main Functions

    */
    checkLevel(output) {
        let cl = this.levels[this.currentLevel]

        //First check the length for an easy tell
        let check = output.length === cl.length
        //Then check each one
        if (check) {
            output.forEach((o, i) => o == cl[i] ? "" : check = false)
        }
        if (check) {
            this.currentLevel += 1
            this.compiler.clearAll()
            this.printLevel()

            //flash the level green, just a little flair
            let levelElem = document.getElementById('level')
            levelElem.style.backgroundColor = '#9f9'
            window.setTimeout(() => { 
                levelElem.style.backgroundColor = '#fff' 
            }, 500)
        }
    }

    addButton = (e) => {
        let kind = e.target.getAttribute('data-kind')
        let value = e.target.getAttribute('data-value')
        console.log(kind, value)
        let compiler = this.compiler

        switch (kind) {
            case "rune":
                compiler.activeCode().addCommand(this.runes.filter(s => s.value === value)[0])
                break;
            case "rune-filter":
                compiler.setRuneFilter(value)
                break;
            case "spell":
                compiler.activeCode().addCommand(this.spells.filter(r => r.name === value)[0])
                break;
            case "spell-filter":
                compiler.setSpellFilter(value)
                break;
            case "talisman":
                compiler.activeCode().addTalismanCommand(value)
                break;
            case "create-talisman":
                compiler.activeCode().createTalisman()
                break;
            case "create-ritual":
                compiler.createRitual()
                break;
            case "compiler":
                compiler.activeCode().addCodeCommand(value)
                break;

            case "ingredient":
                compiler.activeCode().addIngredientCommand(value)
                break;

            case "special":
                switch (value) {
                    case "backspace":
                        compiler.activeCode().backspace();
                        break;
                    case "run":
                        compiler.run()
                        break;
                    case "clear":
                        if (window.confirm("Do you want to clear all code on this ritual?")) { compiler.activeCode().clear() }
                        break;
                    case "reset":
                        if (window.confirm("Do you want to reset all rituals and talismans?")) { compiler.reset() }
                        break;
                }
                break;

            case "compiler-switch":
                compiler.switchCode(value)
                break;
        }
        
    }

    

    /*

    Print Functions

    */
    print() {
        this.printLevel()
        this.printHeaders()
        this.printSpellFilters()
        this.printRuneFilters()
        this.compiler.print()
        this.printButtons()
    }

    printButtons() {
        let buttons = document.querySelectorAll('.codeButton')
        buttons.forEach((b) => b.addEventListener("click", this.addButton))
    }

    printLevel() {
        let levelElem = document.getElementById('level')
        levelElem.innerHTML = ""
        this.levels[this.currentLevel].forEach((r) => levelElem.innerHTML += `<div>${r}</div>`)
    }

    printHeaders() {
        let headers = document.querySelectorAll('#toolbar-headers h3')
        headers.forEach((elem) => elem.addEventListener('click', changeToolbar))
    }

    printRuneFilters() {
        let runeElem = document.querySelector('#runes .screen')
        runeElem.innerHTML = ""

        let showRunes = this.runeFilter === 'all' ? this.runes : this.runes.filter( (r) => r.kind === this.runeFilter)
        
        showRunes.forEach((rune) => {
            runeElem.innerHTML += `<span data-value="${rune.value}" data-kind="rune" class="${rune.kind} codeButton">
                ${rune.value}
            </span>`
        })

        let runeKindElem = document.querySelector('#runes .subbar')
        runeKindElem.innerHTML = ""

        this.runeKinds.forEach((kind) => {
            runeKindElem.innerHTML += `<span data-value="${kind}" data-kind="rune-filter" class="codeButton ${this.runeFilter === kind ? 'activeFilter' : ""}">
                ${kind}
            </span>`
        })
    }

    printSpellFilters() {
        let spellsElem = document.querySelector('#spells .screen')
        spellsElem.innerHTML = ""
    
        let showSpells = this.spellFilter === 'all' ?  this.spells :  this.spells.filter( (r) => r.categories.includes(this.spellFilter))
        showSpells.forEach((spell) => {
            spellsElem.innerHTML += `<span data-value="${spell.name}" data-kind="spell" class="${spell.category} codeButton" >
                ${spell.display}
            </span>`
        })

        let spellCatElem = document.querySelector('#spells .subbar')
        spellCatElem.innerHTML = ""

        this.spellCategories.forEach((category) => {
            spellCatElem.innerHTML += `<span data-value="${category}" data-kind="spell-filter" class="codeButton ${this.spellFilter === category ? 'activeFilter' : ""}">
                ${category}
            </span>`
        })
    }
}
