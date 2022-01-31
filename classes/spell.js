
class Spell {
    constructor({ name, numberIngredients, display }) {
        this.name = name
        this.numberIngredients = numberIngredients
        this.display = display || name
    }

    call(ingredients, code) {
        let t = new Talisman()

        switch (this.name) {
            case "cast":
                console.log("CASTING", ingredients[0].value)
                let output = document.getElementById('output')
                output.innerHTML += `<div>${ingredients[0].value}</div>`
                code.output.push(ingredients[0].value)
                return ingredients[0]
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

            case "equal":
                if (ingredients[0].kind === ingredients[1].kind && ingredients[0].value === ingredients[1].value) {
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

            case "times":
                t.value = 'true'
                t.kind = 'truth'

                return t

                
            case "return":
                return ingredients[0]

        }
    }
}