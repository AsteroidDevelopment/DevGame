import Talisman from './talisman.js'
import runeData from '../dictionaries/runes.js'


export default class Rune {

    constructor({ value, kind }) {
        this.value = value
        this.kind = kind
    }

    static getRunes() {
        return runeData.map(r => new Rune(r))
    }

    static getRuneKinds() {
        let runeKinds = ['all']

        runeData.forEach((rune) => {
            if (!runeKinds.includes(rune.kind)) {
                runeKinds.push(rune.kind)
            }
        })

        return runeKinds
    }

    static find() {

    }

    add(incoming) {
        let talisman = new Talisman()
        talisman.set(this)
        return talisman.add(incoming)
    }
    subtract(incoming) {
        let talisman = new Talisman()
        talisman.set(this)
        return talisman.subtract(incoming)
    }

}

