
class Code {
    constructor() {
        this.buffer = []
        this.talismans = [new Talisman(0), new Talisman(1), new Talisman(2)]
        this.output = []
        this.parsedBuffer = []
    }

    addCommand(item) {
        this.buffer.push(item)
        this.print()
    }

    addTalismanCommand(index) {
        this.addCommand({ kind: 'talisman', index: index - 1 })
    }

    backspace() {
        this.buffer = this.buffer.slice(0, -1)
        this.print()
    }

    clear() {
        this.buffer = []
        let output = document.getElementById('output')
        output.innerHTML = ``
        this.print()
    }

    newLine() {
        this.buffer.push({ kind: 'newline' })
    }

    checkLevel() {
        let cl = levels[currentLevel]

        let check = this.output.length === cl.length
        if (check) {
            this.output.forEach((o, i) => o === cl[i] ? "" : check = false)
        }
        if (check) {
            currentLevel += 1
            let levelElem = document.getElementById('level')
            levelElem.innerHTML = ""
            levels[currentLevel].forEach((r) => levelElem.innerHTML += `<div>${r}</div>`)
            this.clear()
            levelElem.style.backgroundColor = 'green'
            window.setTimeout( () => {
                levelElem.style.backgroundColor = 'transparent'}, 500)
        }
    }

    run() {
        let output = document.getElementById('output')
        output.innerHTML = ``
        this.output = []

        this.parse()
        this.execute()

        this.talismans = [new Talisman(0), new Talisman(1), new Talisman(2)]

        this.checkLevel()
    }

    execute() {
        this.parsedBuffer.forEach((a) => a.execute(this))
    }

    parse(pos = 0) {
        this.parsedBuffer = []

        while (pos < this.buffer.length) {
            let spellParse = this.parseSpell(pos)
            this.parsedBuffer.push(spellParse.result)
            pos = spellParse.pos + 1
        }

        return this.parsedBuffer
    }

    parseSpell(pos = 0) {
        let spell = this.buffer[pos]
        let args = []

        if (spell.kind === 'newline') { pos += 1; spell = this.buffer[pos]; }
        if (spell.constructor.name !== 'Spell') { console.log(`COMPLILE WARNING: pos ${pos} should be spell`) }

        while (args.length < spell.numberIngredients) {
            pos += 1
            let value = this.buffer[pos]

            if (value) {
                if (value.constructor.name === "Spell") {
                    let subparse = this.parseSpell(pos)
                    value = subparse.result
                    pos = subparse.pos
                } else if(value.kind === 'talisman') {
                    value = this.talismans[value.index]
                }
            }
            else {
                value = runes[8]
            }

            args.push(value)
        }

        let result = { result: new ParsedBufferNode({ spell, args }), pos }
        return result

    }

    print() {
        this.parse()

        let elem = document.getElementById('code')
        elem.innerHTML = ""

        this.parsedBuffer.map( (parsedBufferNode) => {
            elem.innerHTML += `<div class="pbline">${parsedBufferNode.print()}</div>`
        })
    }
}