import spellData from '../dictionaries/spells.js'

import spells from './src/spells/spells.js'

export default class Spell {
    constructor({ name, numberIngredients, display, categories }) {
        this.name = name
        this.numberIngredients = numberIngredients
        this.display = display || name
        this.categories = categories
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


    call(ingredients, code) {
        return spells[this.name](ingredients, code)
    }
}






