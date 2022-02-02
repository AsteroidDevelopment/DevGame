
import Talisman from "../../../talisman.js"

export default (args, code) => {
    let t = new Talisman()

    if( args[1].kind !== 'number' ) { return game.runes[0] }

    t.kind = args[0].kind
    if(t.kind === 'number') { t.value = 0 }
    else { t.value = "" }

    let times = args[1].value
    let val = t.kind === 'number' ? Number.parseInt(args[0].value) : args[0].value

    for(let i = 0; i < times; i++) { t.value += val }

    return t
}
