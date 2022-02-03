import Compiler from './compiler.js'

import Rune from './rune.js'
import Spell from './spell.js'
import Level from './level.js'
import LevelController from './levelController.js'

import { changeToolbar } from '../ui/ui.js'

//Largely deals with UI and master data holding (levels, spells, and runes)
export default class Game {
    constructor(params) {
        game = this

        this.compiler = new Compiler(this)

        this.runes = Rune.getRunes()
        this.runeKinds = Rune.getRuneKinds()
        this.runeFilter = 'all'
        
        this.spells = Spell.getSpells()
        this.spellCategories = Spell.getSpellCategories()
        this.spellFilter = 'all'

        this.levelController = new LevelController

        Object.entries(params).map( (p) => this[p[0]] = p[1] )
    }

    setRuneFilter(kind) {
        this.runeFilter = kind
        this.print()
    }
    setSpellFilter(category) {
        this.spellFilter = category
        this.print()
    }
    
    /*

    Main Functions

    */
    checkLevel(output) {
        let check = this.levelController.checkLevel(output)
        if(check) { 
            this.compiler.clearAll()
            this.print()
        }
    }

    addButton = (e) => {
        let kind = e.target.getAttribute('data-kind')
        let value = e.target.getAttribute('data-value')
        
        let compiler = this.compiler

        switch (kind) {
            case "rune":
                compiler.activeCode().addCommand(this.runes.filter(s => s.value === value)[0])
                break;
            case "rune-filter":
                this.setRuneFilter(value)
                break;
            case "spell":
                compiler.activeCode().addCommand(this.spells.filter(r => r.name === value)[0])
                break;
            case "spell-filter":
                this.setSpellFilter(value)
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
        this.levelController.print()
        this.printHeaders()
        this.printSpellFilters()
        this.printRuneFilters()
        this.compiler.print()
        this.printButtons()
    }

    printButtons() {
        let buttons = document.querySelectorAll('.codeButton')
        buttons.forEach((b) => b.addEventListener("click", this.addButton))
        
        let spellButtons = document.querySelectorAll('.spellButton')
        spellButtons.forEach((b) => b.addEventListener("mouseenter", Spell.showHelp))
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
            spellsElem.innerHTML += `<span data-value="${spell.name}" data-kind="spell" class="${spell.category} spellButton  codeButton" >
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

        
        this.printButtons()
    }
}
