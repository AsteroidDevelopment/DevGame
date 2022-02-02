export default class Talisman {
    constructor(name) {
        this.name = name || ""
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
            newTalisman.value = `${newTalisman.value === 'true' && incoming.value === 'true'}`
            newTalisman.kind = "truth"
        }
        else {
            newTalisman.value = `${newTalisman.value}` + `${incoming.value}`
            newTalisman.kind = "letter"
        }
        return newTalisman
    }

    subtract(incoming) {
        let newTalisman = new Talisman()
        newTalisman.set(this)

        if (this.kind === 'number' && incoming.kind === 'number') {
            newTalisman.value = Number.parseInt(newTalisman.value) - Number.parseInt(incoming.value)
            newTalisman.kind = "number"
        } else if (this.kind === 'letter') {
            newTalisman.value = `${newTalisman.value.replaceAll(incoming.value, '')}`
            newTalisman.kind = "letter"
        }
        return newTalisman
    }
    
    pop() {
        let strVal = `${this.value}`
        let retValue = strVal.charAt(strVal.length-1)
        this.value = strVal.substring(0, strVal.length-1)

        let newTalisman = new Talisman()
        newTalisman.kind = this.kind
        newTalisman.value = retValue

        return newTalisman
    }

}