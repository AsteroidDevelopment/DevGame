export let addSpell = (name) => {
    let index = -1
    game.spells.forEach((s, i) => s.name === name ? index = i : "")
    if (index === -1) { console.log("error finding spell", name) }
    game.compiler.activeCode().addCommand(game.spells[index])
}

export let addRune = (char) => {
    let index = -1
    game.runes.forEach((r, i) => r.value == char ? index = i : "")
    if (index === -1) { console.log("error finding rune", char) }
    game.compiler.activeCode().addCommand(game.runes[index])
}

export let addValueTalisman = (str) => {
    let len = str.length

    let chars = str.split('')
    chars.forEach( (c, i) => {
        if(i!==len-1){ addSpell('add')
            addSpell('wordify') }
        addRune(c)
    })

}