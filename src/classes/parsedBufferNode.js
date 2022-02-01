export default class ParsedBufferNode {
    constructor({ spell, args }) {
        this.spell = spell
        this.args = args
    }

    static parse(buffer, args, pos) {
        let spell = buffer[pos.i]
        let spellArgs = []

        let argCount = 0
        if (spell.kind === 'ritual') {
            spell = game.compiler.codes[spell.name]
            argCount = spell.argmumentCount
        } else if (spell.constructor.name === 'Spell') {
            argCount = spell.numberIngredients
        }

        while (spellArgs.length < argCount) {
            pos.i += 1
            let value = buffer[pos.i]

            if (value) {
                if (value.constructor.name === "Spell" || value.kind === 'ritual') {
                    value = ParsedBufferNode.parse(buffer, args, pos)
                } 
            } 
            //default to the 'blank' rune for parsing
            else { value = game.runes[0] }
            spellArgs.push(value)
        }

        return new ParsedBufferNode({ spell, args: spellArgs })

    }

    execute(code, args) {
        if (this.spell.constructor.name === 'Code') {
            return this.spell.run(compiler, this.args.map((a) => {
                if (a.constructor.name === 'ParsedBufferNode') {
                    return a.execute(code, args)
                } else if( a.kind === 'ingredient') {
                    return args[Number.parseInt(a.index)]
                } else {
                    return a
                }
            })) 
        } else {
            switch (this.spell.name) {
                case "ifElse":
                    let check = this.args[0].execute(code, args)
                    if (check.kind === 'truth' && check.value === 'false' || check.kind === 'number' && check.value == 0) {
                        if (this.args[2].constructor.name === 'ParsedBufferNode') {
                            return this.args[2].execute(code, args)
                        } else if( this.args[2].kind === 'ingredient') {
                            return args[Number.parseInt(this.args[2].index)]
                        }  else {
                            return this.args[2]
                        }
                    } else {
                        if (this.args[1].constructor.name === 'ParsedBufferNode') {
                            return this.args[1].execute(code, args)
                        } else {
                            return this.args[1]
                        }
                    }

                case "times":
                    let times = null
                    if (this.args[0].constructor.name === 'ParsedBufferNode') {
                        times = this.args[0].execute(code, args)
                    }  else if( this.args[0].kind === 'ingredient') {
                        times = args[Number.parseInt(this.args[0].index)]
                    }  else {
                        times = this.args[0]
                    }
                    for (let i = 0; i < times.value; i++) {
                        this.args[1].execute(code, args)
                    }
                    return times

                default:
                    return this.spell.call(this.args.map((a) => {
                        if (a.constructor.name === 'ParsedBufferNode') {
                            return a.execute(code, args)
                        }  else if( a.kind === 'ingredient') {
                            return args[Number.parseInt(a.index)]
                        } else {
                            return a
                        }
                    }), code)
            }
        }
    }

    print() {
        console.log(this)
        return `<div class="pbentry">
            <div class="pbspellname">${this.spell.display || this.spell.name}</div>
            <div class="pbspellargs">${this.args.map((a) => {
            let ret = ""
            if (a.constructor.name === 'Talisman') { ret = `<div class="pbentry">${(a.name)}</div>` }
            else if (a.constructor.name === 'ParsedBufferNode') { ret = a.print() }
            else if(a.kind === 'ingredient') { ret = `<div class="pbentry">Arg ${Number.parseInt(a.index)+1}</div>` }
            else { ret = `<div class="pbentry">${a.value}</div>` }
            return `<div>${ret}</div>`
        }).join(' ')}</div>
        </div>`
    }
}