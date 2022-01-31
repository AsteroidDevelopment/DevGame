
class Code {
    constructor(name = "", argmumentCount = 0) {
        this.buffer = []
        this.talismans = {}
        this.output = []
        this.parsedBuffer = []

        this.name = name
        this.argmumentCount = argmumentCount
    }

    createTalisman() {
        let num = Object.entries(code.talismans).length + 1
        let name = prompt("Please enter talisman name", `Talisman ${num}`);
        let t = new Talisman(name)
        this.talismans[name] = t
        this.print()
    }

    addCommand(item) {
        this.buffer.push(item)
        this.print()
    }

    addTalismanCommand(index) {
        this.addCommand({ kind: 'talisman', index: index })
    }

    addCodeCommand(name) {
        this.addCommand({ kind: 'ritual', name: name })
    }

    addIngredientCommand(index) {
        this.addCommand({ kind: 'ingredient', index: index })
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
        this.print()
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
            window.setTimeout(() => {
                levelElem.style.backgroundColor = 'transparent'
            }, 500)
        }
    }

    run(compiler, args) {
        console.log(compiler, args)

        let output = document.getElementById('output')
        output.innerHTML = ``
        this.output = []

        this.parse(compiler, args)
        let lastValue = this.execute(compiler, args)
        console.log(lastValue)

        //this.talismans = {}

        this.checkLevel()
        return lastValue
    }

    execute(compiler, args) {
        let lastValue = null
        this.parsedBuffer.forEach((a) => {
            lastValue = a.execute(this, args)
        })
        return lastValue
    }

    parse(compiler, args, pos = 0) {
        this.parsedBuffer = []

        while (pos < this.buffer.length) {
            let spellParse = this.parseSpell(compiler, args, pos)
            this.parsedBuffer.push(spellParse.result)
            pos = spellParse.pos + 1
        }

        return this.parsedBuffer
    }

    parseSpell(compiler, args, pos = 0) {
        let spell = this.buffer[pos]
        let spellArgs = []

        if (spell.kind === 'newline') { pos += 1; spell = this.buffer[pos]; }

        let argCount = 0
        if (spell.kind === 'ritual') {
            spell = compiler.codes[spell.name] 
            argCount = spell.argmumentCount
        } else if (spell.constructor.name === 'Spell') {
            argCount = spell.numberIngredients
        }

        while (spellArgs.length < argCount) {
            pos += 1
            let value = this.buffer[pos]

            if (value) {
                if (value.constructor.name === "Spell" || value.kind === 'ritual') {
                    let subparse = this.parseSpell(compiler, args, pos)
                    value = subparse.result
                    pos = subparse.pos
                } else if (value.kind === 'talisman') {
                    value = this.talismans[value.index]
                }
            }
            else {
                value = runes[0]
            }

            spellArgs.push(value)
        }


        let result = { result: new ParsedBufferNode({ spell, args: spellArgs }), pos }
        return result

    }

    print() {
        this.parse(compiler, )

        let elem = document.getElementById(`code-${this.name}`)
        elem.innerHTML = ""

        this.parsedBuffer.map((parsedBufferNode) => {
            elem.innerHTML += `<div class="pbline">${parsedBufferNode.print()}</div>`
        })


        if (compiler.activeCodeName === this.name) {
            let talismanElem = document.getElementById('talismans')
            talismanElem.innerHTML = Object.entries(this.talismans).map((t) => `<span data-value="${t[0]}"  data-kind="talisman" class="codeButton" >${t[0]}</span>`).join("")

            let ingredientElem = document.getElementById('ingredients')
            ingredientElem.innerHTML = ""
            for (let i = 0; i < this.argmumentCount; i++) {
                ingredientElem.innerHTML += `<span data-value="${i}"  data-kind="ingredient" class="codeButton" >Arg ${i + 1}</span>`
            }

        }

        let buttons = document.querySelectorAll('.codeButton')
        buttons.forEach((b) => b.addEventListener("click", addButton))
    }
}