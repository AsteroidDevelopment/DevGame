class Rune {

    constructor({ value, kind }) {
        this.value = value
        this.kind = kind
    }

    add(incoming) {
        let talisman = new Talisman()
        talisman.set(this)
        return talisman.add(incoming)
    }

}

