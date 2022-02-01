import Talisman from "../../../talisman.js"

export default (args, code) => {
    let t = new Talisman()
    let firstOr = !(args[0].kind === 'truth' && args[0].value === 'false' ||
        args[0].kind === 'number' && args[0].value == 0 || args[0].kind === 'blank')

    let secondOr = !(args[1].kind === 'truth' && args[1].value === 'false' ||
        args[1].kind === 'number' && args[1].value == 0 || args[1].kind === 'blank')

    if (firstOr || secondOr) {
        t.value = 'true'
        t.kind = 'truth'
    } else {
        t.value = 'false'
        t.kind = 'truth'
    }
    return t
}
