class ParsedBufferNode {
    constructor({ spell, args }) {
        this.spell = spell
        this.args = args
    }

    execute(code) {

        switch (this.spell.name) {
            case "ifElse":
                let check = this.args[0].execute(code)
                if (check.kind === 'truth' && check.value === 'false' || check.kind === 'number' && check.value == 0) {
                    if(this.args[2].constructor.name === 'ParsedBufferNode') {
                        return this.args[2].execute(code)
                    } else {
                        return this.args[2]
                    }
                } else {
                    if(this.args[1].constructor.name === 'ParsedBufferNode') {
                        return this.args[1].execute(code)
                    } else {
                        return this.args[1]
                    }
                }

            case "times":
                let times = null
                if(this.args[0].constructor.name === 'ParsedBufferNode') {
                    times = this.args[0].execute(code)
                } else {
                    times = this.args[0]
                }
                for(let i = 0; i < times.value; i++) {
                    this.args[1].execute(code)
                }
                return times

            default:
                return this.spell.call(this.args.map((a) => {
                    if (a.constructor.name === 'ParsedBufferNode') {
                        return a.execute(code)
                    } else {
                        return a
                    }
                }), code)

        }
    }

    print() {
        return `<div class="pbentry">
            <div class="pbspellname">${this.spell.name}</div>
            <div class="pbspellargs">${ this.args.map( (a) => {
                let ret = ""
                if(a.constructor.name === 'Talisman') { ret = `<div class="pbentry">t${(a.index+1)}</div>` }
                else if(a.constructor.name === 'ParsedBufferNode') { ret = a.print() }
                else { ret = `<div class="pbentry">${a.value}</div>` }
                return `<div>${ret}</div>`
            }).join(' ') }</div>
        </div>`
    }
}