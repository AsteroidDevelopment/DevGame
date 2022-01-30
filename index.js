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

class Talisman {
    constructor() {
        this.value = ""
        this.kind = ""
    }

    //rune or talisman
    set(incoming) {
        this.value = incoming.value
        this.kind = incoming.kind
    }

    add(incoming) {
        let newTalisman = new Talisman()
        newTalisman.set(this)

        console.log(newTalisman, incoming)

        if (this.kind === 'number' && incoming.kind === 'number') {
            newTalisman.value = Number.parseInt(newTalisman.value) + Number.parseInt(incoming.value)
            newTalisman.kind = "number"
        } else {
            newTalisman.value = `${newTalisman.value}` + `${incoming.value}`
            newTalisman.kind = "letter"
        }
        return newTalisman
    }

}

class Spell {
    constructor({ name, numberIngredients }) {
        this.name = name
        this.numberIngredients = numberIngredients
    }

    call(ingredients, code, line) {
        let t = new Talisman()

        switch (this.name) {
            case "cast":
                console.log("CASTING", ingredients[0].value)
                let output = document.getElementById('output')
                output.innerHTML += `<div>${ingredients[0].value}</div>`
                code.output.push(ingredients[0].value)
                return ingredients[0].value
            case "add":
                return ingredients[0].add(ingredients[1])
            case "set":
                ingredients[0].value = ingredients[1].value
                ingredients[0].kind = ingredients[1].kind
                return ingredients[0]
            case "create":
                t.set(ingredients[0])
                code.talismans.push(t)
                return t
            case "numberfy":
                t.set(ingredients[0])
                if(t.kind === 'letter' && Number.parseInt(t.value)) {
                    t.value = Number.parseInt(t.value)
                    t.kind = 'number'
                }
                return t
            case "wordify":
                t.set(ingredients[0])
                if(t.kind === 'number') {
                    t.value = `${t.value}`
                    t.kind = 'letter'
                }
                return t
            
            case "equal":
                if(ingredients[0].kind === ingredients[1].kind && ingredients[0].value === ingredients[1].value) {
                    t.value = 'true'
                    t.kind = 'truth'
                } else {
                    t.value = 'false'
                    t.kind = 'truth'
                }
                return t
                    
            case "ifElse":
                let second = ingredients[0].kind === 'truth' && ingredients[0].value === 'false' ||
                ingredients[0].kind === 'number' && ingredients[0].value == 0

                return second ? ingredients[2] : ingredients[1]
                
        }
    }
}


class Code {
    constructor() {
        this.talismans = []
        this.lines = [new Line()]
        this.output = []
    }

    addCommand(item) {
        this.lines.at(-1).addCommand(item)
        this.print()
    }

    addTalismanCommand(index) {
        this.addCommand({ kind: 'talisman', index: index - 1 })
    }

    backspace() {
        let lastLine = this.lines.at(-1)
        if (lastLine.buffer.length === 0) {
            this.lines = this.lines.slice(0, -1)
        } else {
            lastLine.backspace()
        }
        this.print()
    }

    clear() {
        this.lines = [new Line()]
        this.print()
    }

    newLine() {
        this.lines.push(new Line())
        this.print()
    }

    run() {
        let output = document.getElementById('output')
        output.innerHTML = ``
        this.output = []
        this.lines.forEach((l) => {
            l.parse(this)
        })
        this.talismans = []

        let cl = levels[currentLevel]

        let check = this.output.length === cl.length
        if(check) {
            this.output.forEach((o, i) => o === cl[i] ? "" : check = false)
        }
        if (check) {
            currentLevel += 1
            let levelElem = document.getElementById('level')
            levelElem.innerHTML = ""
            levels[currentLevel].forEach((r) => levelElem.innerHTML += `<div>${r}</div>`)
        }


    }

    print() {
        let elem = document.getElementById('code')
        elem.innerHTML = ""
        this.lines.forEach(l => elem.innerHTML += `<div class="line">${l.print()}</div>`)
    }
}

class Line {
    constructor() {
        this.buffer = []
    }

    parse(code, pos = 0) {
        let spell = this.buffer[pos]

        let args = []

        while(args.length < spell.numberIngredients){
            pos += 1
            let value = this.buffer[pos]
            if (value.kind === 'talisman') {
                let t = code.talismans[value.index]
                value = t
            }
            if (value.constructor.name === "Spell") {
                let subparse = this.parse(code, pos)
                value = subparse.result
                pos = subparse.pos
            }
            args.push(value)
        }
        
        console.log(args, spell.name)
        let result = spell.call(args, code, this)
        console.log(result)

        return {result, pos}
    }

    addCommand(item) {
        this.buffer.push(item)
    }

    backspace() {
        this.buffer = this.buffer.slice(0, -1)
    }

    print() {
        return this.buffer.map(b => {
            if (b.kind === 'talisman') {
                return "t" + (b.index + 1)
            }
            if (b.constructor.name === "Spell") {
                return b.name
            }
            else { return b.value }
        }).join(" ")
    }
}


let code = new Code()
let currentLevel = 0

let runes = runeData.map(r => new Rune(r))
let spells = spellData.map(s => new Spell(s))
let ts = [1, 2, 3]

let runeElem = document.getElementById('runes')
let talismanElem = document.getElementById('talismans')
let spellsElem = document.getElementById('spells')

runes.forEach((rune) => runeElem.innerHTML += `<span data-value="${rune.value}"  data-kind="rune"  class="codeButton">${rune.value}</span>`)
ts.forEach((t) => talismanElem.innerHTML += `<span data-value="${t}"  data-kind="talisman" class="codeButton" >Talisman #${t}</span>`)
spells.forEach((spell) => spellsElem.innerHTML += `<span data-value="${spell.name}" data-kind="spell" class="codeButton" >${spell.name}</span>`)


let levelElem = document.getElementById('level')
levels[currentLevel].forEach((r) => levelElem.innerHTML += `<div>${r}</div>`)

let addButton = (e) => {
    let kind = e.target.getAttribute('data-kind')
    let value = e.target.getAttribute('data-value')
    switch (kind) {
        case "rune":
            code.addCommand(runes.filter(s => s.value === value)[0])
            break;
        case "spell":
            code.addCommand(spells.filter(r => r.name === value)[0])
            break;
        case "talisman":
            code.addTalismanCommand(Number.parseInt(value))
            break;
        case "special":
            switch (value) {
                case "backspace":
                    code.backspace();
                    break;
                case "newline":
                    code.newLine()
                    break;
                case "run":
                    code.run()
                    break;
                case "clear":
                    code.clear()
                    break;
            }
    }
}

let buttons = document.querySelectorAll('.codeButton')
buttons.forEach((b) => b.addEventListener("click", addButton))


