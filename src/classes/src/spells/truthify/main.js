import Talisman from "../../../talisman.js"

export default (args, code) => {
    let t = new Talisman()
    let arg = args[0]
    t.kind = 'truth'
    if (arg.kind === 'number') {
        if (arg.value == 0) { t.value = 'false' }
        else { t.value = 'true' }
    } else if (arg.kind === 'letter') {
        t.value = 'true'
    } else if (arg.kind === 'truth') {
        t.value = arg.value
    } else if (arg.kind === 'blank') {
        t.value = 'false'
    }
    return t
}
