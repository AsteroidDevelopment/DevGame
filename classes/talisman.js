class Talisman {
    constructor(index) {
        this.index = index
        this.value = "_"
        this.kind = "blank"
    }

    //rune or talisman
    set(incoming) {
        this.value = incoming.value
        this.kind = incoming.kind
    }

    add(incoming) {
        let newTalisman = new Talisman()
        newTalisman.set(this)

        if (this.kind === 'number' && incoming.kind === 'number') {
            newTalisman.value = Number.parseInt(newTalisman.value) + Number.parseInt(incoming.value)
            newTalisman.kind = "number"
        } else if (this.kind === 'truth' && incoming.kind === 'truth') {
            newTalisman.value = newTalisman.value === 'true' && incoming.value === 'true'
            newTalisman.kind = "truth"
        }
        else {
            newTalisman.value = `${newTalisman.value}` + `${incoming.value}`
            newTalisman.kind = "letter"
        }
        return newTalisman
    }

}