import Talisman from "../../../talisman.js"

export default (args, code) => {
    let t = new Talisman()
    t.value = 'false'
    t.kind = 'truth'

    let firstIf = args[0].kind === 'truth' && args[0].value === 'false' ||
        args[0].kind === 'number' && args[0].value == 0 || args[0].kind === 'blank'

    return firstIf ? t : args[1]
}
