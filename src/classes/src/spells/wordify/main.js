import Talisman from "../../../talisman.js"

export default (args, code) => {
    let t = new Talisman()
    t.set(args[0])
    if (t.kind === 'number') {
        t.value = `${t.value}`
    }
    if (t.kind === 'blank') {
        t.value = ``
    }
    t.kind = 'letter'
    return t
}
