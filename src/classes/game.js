import Rune from 'rune.js'
import Spell from 'spell.js'

import Compiler from 'compiler.js'

import runeData from '../dictionaries/runes.js'
import spellData from '../dictionaries/spells.js'
import levels from '../dictionaries/levels.js'



export class Game {
    constructor() {
        this.runes = runeData.map(r => new Rune(r))
        this.spells = spellData.map(s => new Spell(s))
        this.levels = levels

        this.compiler = new Compiler()

        this.currentLevel = 0

        this.print()

    }

    addButton = (e) => {
        let kind = e.target.getAttribute('data-kind')
        let value = e.target.getAttribute('data-value')
        let compiler = this.compiler

        switch (kind) {
            case "rune":
                compiler.activeCode().addCommand(runes.filter(s => s.value === value)[0])
                break;
            case "rune-filter":
                compiler.setRuneFilter(value)
                break;
            case "spell":
                compiler.activeCode().addCommand(spells.filter(r => r.name === value)[0])
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
        this.print();
    }

    changeToolbar = (e) => {
        let headers2 = document.querySelectorAll('#toolbar-headers h3')
        headers2.forEach((elem) => elem.classList.remove('toolbar-active'))

        let screens = document.querySelectorAll('#toolbar-options > div')
        screens.forEach((elem) => elem.classList.remove('toolbar-active'))

        e.target.classList.add('toolbar-active')

        headers2 = document.querySelectorAll('#toolbar-headers h3')
        headers2.forEach((elem, i) => {
            if (elem.classList.contains('toolbar-active')) {
                screens[i].classList.add('toolbar-active')
            }
        })
    }

    print() {
        let buttons = document.querySelectorAll('.codeButton')
        buttons.forEach((b) => b.addEventListener("click", addButton))

        this.printLevel()
        this.printHeaders()

        this.compiler.print()
    }

    printLevel() {
        let levelElem = document.getElementById('level')
        levelElem.innerHTML = ""
        levels[currentLevel].forEach((r) => levelElem.innerHTML += `<div>${r}</div>`)
    }

    printHeaders() {
        headers = document.querySelectorAll('#toolbar-headers h3')
        headers.forEach((elem) => elem.addEventListener('click', this.changeToolbar))
    }



}
