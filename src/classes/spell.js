
class Spell {
    constructor({ name, numberIngredients, display, categories }) {
        this.name = name
        this.numberIngredients = numberIngredients
        this.display = display || name
        this.categories = categories
    }

    call(ingredients, code) {
        let t = new Talisman()
        let arg1 = ingredients[0]
        let arg2 = ingredients[1]

        switch (this.name) {
            case "cast":
                console.log("CASTING", ingredients[0].value)
                let output = document.getElementById('output')
                output.innerHTML += `<div>${ingredients[0].value}</div>`
                compiler.output.push(ingredients[0].value)
                return ingredients[0]

            case "add":
                return ingredients[0].add(ingredients[1])

            case "subtract":
                return ingredients[0].subtract(ingredients[1])

            case "pop":
                return ingredients[0].pop(ingredients[1])

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
                if (t.kind === 'letter' && Number.parseInt(t.value)) {
                    t.value = Number.parseInt(t.value)
                    t.kind = 'number'
                }
                return t

            case "wordify":
                t.set(ingredients[0])
                if (t.kind === 'number') {
                    t.value = `${t.value}`
                    t.kind = 'letter'
                }
                return t

            case "truthify":
                let arg = ingredients[0]
                t.kind = 'truth'
                if (arg.kind === 'number') {
                    if (arg.value === 0) { t.value = 'false' }
                    else { t.value = 'true' }
                } else if (arg.kind === 'letter') {
                    t.value = 'true'
                } else if (arg.kind === 'truth') {
                    t.value = arg.value
                } else if (arg.kind === 'blank') {
                    t.value = 'false'
                }
                return t

            case "equal":
                if (ingredients[0].kind === ingredients[1].kind && ingredients[0].value === ingredients[1].value) {
                    t.value = 'true'
                    t.kind = 'truth'
                } else {
                    t.value = 'false'
                    t.kind = 'truth'
                }
                return t

            case "more":
                if (ingredients[0].value > ingredients[1].value) {
                    t.value = 'true'
                    t.kind = 'truth'
                } else {
                    t.value = 'false'
                    t.kind = 'truth'
                }
                return t

            case "less":
                if (ingredients[0].value < ingredients[1].value) {
                    t.value = 'true'
                    t.kind = 'truth'
                } else {
                    t.value = 'false'
                    t.kind = 'truth'
                }
                return t


            //or
            case "or":
                let firstOr = !(ingredients[0].kind === 'truth' && ingredients[0].value === 'false' ||
                    ingredients[0].kind === 'number' && ingredients[0].value == 0 || ingredients[0].kind === 'blank')

                let secondOr = !(ingredients[1].kind === 'truth' && ingredients[1].value === 'false' ||
                    ingredients[1].kind === 'number' && ingredients[1].value == 0 || ingredients[1].kind === 'blank')

                if (firstOr || secondOr) {
                    t.value = 'true'
                    t.kind = 'truth'
                } else {
                    t.value = 'false'
                    t.kind = 'truth'
                }

                return t

            //not
            case "not":
                let firstNot = ingredients[0].kind === 'truth' && ingredients[0].value === 'false' ||
                    ingredients[0].kind === 'number' && ingredients[0].value == 0 || ingredients[0].kind === 'blank'

                if (firstNot) {
                    t.value = 'true'
                    t.kind = 'truth'
                } else {
                    t.value = 'false'
                    t.kind = 'truth'
                }

                return t

            case "ifElse":
                let secondElse = ingredients[0].kind === 'truth' && ingredients[0].value === 'false' ||
                    ingredients[0].kind === 'number' && ingredients[0].value == 0 || ingredients[0].kind === 'blank'

                return secondElse ? ingredients[2] : ingredients[1]

            case "ifThen":
                t.value = 'false'
                t.kind = 'truth'

                let firstIf = ingredients[0].kind === 'truth' && ingredients[0].value === 'false' ||
                    ingredients[0].kind === 'number' && ingredients[0].value == 0 || ingredients[0].kind === 'blank'

                return firstIf ? t : ingredients[1]

            case "times":
                t.value = 'true'
                t.kind = 'truth'

                return t

            case "while":
                t.value = 'true'
                t.kind = 'truth'

                return t

            case "exit":
                t.value = 'true'
                t.kind = 'truth'

                return t


            case "return":
                return ingredients[0]


            case "increment":

                arg1.value += arg2
                return arg1

            case "multiply":
                t.kind = arg1.kind
                if(t.kind === 'number') { t.value = 0 }
                else { t.value = "" }

                for(let i = 0; i < arg2.value; i++) { t.value += Number.parseInt(arg1.value)}

                return t

            case "square":

                t.set(arg1)

                t.value = t.value * t.value

                return t

            case "exponent":

                t.set(arg1)

                t.value = t.value ** arg2.value
                return t


            case "divide":

                t.set(arg1)

                t.value = Math.floor(t.value / arg2.value)
                
                return t

        }
    }
}






