

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

