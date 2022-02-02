export default class ParsedBufferNode {
    constructor({ spell, args }) {
        this.spell = spell
        this.args = args
    }

    static parse(buffer, args, pos) {
        let spell = buffer[pos.i]
        let spellArgs = []

        while (spellArgs.length < spell.numberIngredients) {
            //Increase the position and read.
            pos.i += 1
            let value = buffer[pos.i]


            //It's possible "value" doesn't exist- for example, the space of time in between clicking a spell and the arguments.
            //If there's no value in the middle of parsing a spell (value is null), then insert a blank rune.
            if (!value) { value = game.runes[0] }
            else {
                //If the argument is a spell or ritual, then recursively parse it.
                if (value.constructor.name === "Spell" || value.constructor.name === "Code") {
                    value = ParsedBufferNode.parse(buffer, args, pos)
                }
            }

            spellArgs.push(value)
        }

        return new ParsedBufferNode({ spell, args: spellArgs })

    }

    execute(code, args) {
        //If it's a ritual, execute the code after executing each argument.
        if (this.spell.constructor.name === 'Code') {
            return this.spell.execute(this.executeArguments(args, code))
        } else {
            //Most spells are pretty straightforward, but some logical ones have execution catches. Handle them here.
            switch (this.spell.name) {
                case "ifThen":
                    let checkIf = this.executeNthArgument(0, args, code)
                    if (checkIf.kind === 'truth' && checkIf.value === 'false' || checkIf.kind === 'number' && checkIf.value == 0) {
                        return checkIf
                    } else {
                        return this.executeNthArgument(1, args, code)
                    }

                case "ifElse":
                    let check = this.executeNthArgument(0, args, code)
                    if (check.kind === 'truth' && check.value === 'false' || check.kind === 'number' && check.value == 0) {
                        return this.executeNthArgument(2, args, code)
                    } else {
                        return this.executeNthArgument(1, args, code)
                    }

                case "times":
                    let times = this.executeNthArgument(0, args, code)
                    for (let i = 0; i < times.value; i++) {
                        this.executeNthArgument(1, args, code)
                    }
                    return times

                case "whileSpell":
                    let depth = 0
                    let last = null

                    let whileCheck = this.executeNthArgument(0, args, code)
                    whileCheck = !(whileCheck.kind === 'truth' && whileCheck.value === 'false' || whileCheck.kind === 'number' && whileCheck.value == 0)

                    while(whileCheck && depth < 1028){
                        depth += 1

                        last = this.executeNthArgument(1, args, code)
                        
                        whileCheck = this.executeNthArgument(0, args, code)
                        whileCheck = !(whileCheck.kind === 'truth' && whileCheck.value === 'false' || whileCheck.kind === 'number' && whileCheck.value == 0)
                    }
                    return last

                default:
                    return this.spell.call(this.executeArguments(args, code), code)
            }
        }
    }

    executeArguments(args, code) {
        return this.args.map((a) => this.executeArgument(a, args, code))
    }

    executeArgument(a, args, code) {
        if (a.constructor.name === 'ParsedBufferNode') {
            return a.execute(code, args)
        } else if (a.kind === 'ingredient') {
            return args[Number.parseInt(a.index)]
        } else {
            return a
        }
    }

    executeNthArgument(n, args, code) {
        return this.executeArgument(this.args[n], args, code)
    }

    print() {
        return `<div class="pbentry">
            <div class="pbspellname">${this.spell.display || this.spell.name}</div>
            <div class="pbspellargs">${this.args.map((a) => {
            let ret = ""
            if (a.constructor.name === 'Talisman') { ret = `<div class="pbentry">${(a.name)}</div>` }
            else if (a.constructor.name === 'ParsedBufferNode') { ret = a.print() }
            else if (a.kind === 'ingredient') { ret = `<div class="pbentry">Arg ${Number.parseInt(a.index) + 1}</div>` }
            else { ret = `<div class="pbentry">${a.value}</div>` }
            return `<div>${ret}</div>`
        }).join(' ')}</div>
        </div>`
    }
}