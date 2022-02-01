import Talisman from "../../../talisman.js"

export default (args, code) => {
    let t = new Talisman()
    t.set(args[0])
    if (t.kind === 'letter' && Number.parseInt(t.value)) {
        t.value = Number.parseInt(t.value)
        t.kind = 'number'
    }
    return t
}
