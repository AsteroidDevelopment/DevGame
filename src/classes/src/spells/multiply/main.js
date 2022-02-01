import Talisman from "../../../talisman.js"

export default (args, code) => {
    let t = new Talisman()
    t.kind = args[0].kind
    if(t.kind === 'number') { t.value = 0 }
    else { t.value = "" }

    for(let i = 0; i < args[1].value; i++) { t.value += Number.parseInt(args[0].value) }

    return t
}
