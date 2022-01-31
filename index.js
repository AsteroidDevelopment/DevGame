let compiler = new Compiler()

let code = compiler.codes.main
let currentLevel = 0

let runes = runeData.map(r => new Rune(r))
let spells = spellData.map(s => new Spell(s))
let runeElem = document.getElementById('runes')
let spellsElem = document.getElementById('spells')

runes.forEach((rune) => runeElem.innerHTML += `<span data-value="${rune.value}"  data-kind="rune"  class="codeButton">${rune.value}</span>`)
spells.forEach((spell) => spellsElem.innerHTML += `<span data-value="${spell.name}" data-kind="spell" class="codeButton" >${spell.display}</span>`)


let levelElem = document.getElementById('level')
levels[currentLevel].forEach((r) => levelElem.innerHTML += `<div>${r}</div>`)

let changeToolbar = (e) => {
    let headers2 = document.querySelectorAll('#toolbar-headers h3')
    headers2.forEach((elem) => elem.classList.remove('toolbar-active'))

    let screens = document.querySelectorAll('#toolbar-options > div')
    screens.forEach((elem) => elem.classList.remove('toolbar-active'))

    e.target.classList.add('toolbar-active')

    headers2 = document.querySelectorAll('#toolbar-headers h3')
    headers2.forEach((elem, i) => {
        if (elem.classList.contains('toolbar-active')) {
            screens[i].classList.add('toolbar-active')
        }
    })
}

let headers = document.querySelectorAll('#toolbar-headers h3')
headers.forEach((elem) => elem.addEventListener('click', changeToolbar))

let addButton = (e) => {
    let kind = e.target.getAttribute('data-kind')
    let value = e.target.getAttribute('data-value')

    switch (kind) {
        case "rune":
            compiler.activeCode().addCommand(runes.filter(s => s.value === value)[0])
            break;
        case "spell":
            compiler.activeCode().addCommand(spells.filter(r => r.name === value)[0])
            break;
        case "talisman":
            compiler.activeCode().addTalismanCommand(value)
            break;
        case "create-talisman":
            compiler.activeCode().createTalisman()
            break;
        case "create-ritual":
            compiler.createRitual()
            break;
        case "compiler":
            compiler.activeCode().addCodeCommand(value)
            break;

        case "ingredient":
            compiler.activeCode().addIngredientCommand(value)
            break;

        case "special":
            switch (value) {
                case "backspace":
                    compiler.activeCode().backspace();
                    break;
                case "newline":
                    compiler.activeCode().newLine()
                    break;
                case "run":
                    compiler.codes['main'].run(compiler)
                    break;
                case "clear":
                    compiler.activeCode().clear()
                    break;
            }
            break;

        case "compiler-switch":
            compiler.switchCode(value)
            break;
    }
}


let buttons = document.querySelectorAll('.codeButton')
buttons.forEach((b) => b.addEventListener("click", addButton))


compiler.print()