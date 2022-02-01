import Talisman from "../../../talisman.js"

export default (args, code) => {
    let t = new Talisman()
    let firstNot = args[0].kind === 'truth' && args[0].value === 'false' ||
        args[0].kind === 'number' && args[0].value == 0 || args[0].kind === 'blank'

    if (firstNot) {
        t.value = 'true'
        t.kind = 'truth'
    } else {
        t.value = 'false'
        t.kind = 'truth'
    }

    return t
}
