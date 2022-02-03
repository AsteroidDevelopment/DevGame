import spellData from '../dictionaries/spells.js'

import spells from './src/spells/spells.js'

export default class Spell {
    constructor({ name, numberIngredients, display, categories, unlock, text }) {
        this.name = name
        this.numberIngredients = numberIngredients
        this.display = display || name
        this.categories = categories
        this.unlock = unlock
        this.text = text
    }

    static getSpells() {
        return spellData.map(r => new Spell(r))
    }

    static getSpellCategories() {
        let spellCategories = ['all']

        spellData.forEach((spell) => {
            spell.categories.forEach((c) => {
                if (!spellCategories.includes(c)) {
                    spellCategories.push(c)
                }
            })
        })

        return spellCategories
    }

    static showHelp(e) {
        let helpElem = document.getElementById('other-help')
        helpElem.innerHTML = ""
        let name = e.target.getAttribute('data-value')

        let index = -1
        game.spells.forEach((s, i) => s.name === name ? index = i : "")
        if (index === -1) { console.log("error finding spell", name) }
        
        let spell = game.spells[index]

        let html = `<div>
            <h5>${spell.name}</h5>
            <p>${spell.text.description}</p>
            <br />
            <p>Returns</p>
            <p>${ spell.text.returns }</p>
            <br />
            <p>Ingredients</p>
            ${ spell.text.args?.map((a, i) => `<p>#${i+1}. ${a}</p>`).join("")}
            <br />
            <p>Examples</p>
            ${ spell.text.examples?.map((a, i) => `<p>-${a}</p>`).join("")}
            <br />
            <p>Hints</p>
            ${ spell.text.hints?.map((a, i) => `<p>-${a}</p>`).join("")}

        </div>`

        helpElem.innerHTML = html

    }


    call(ingredients, code) {
        return spells[this.name](ingredients, code)
    }
}






