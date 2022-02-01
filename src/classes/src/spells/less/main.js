import Talisman from "../../../talisman.js"

export default (args, code) => {
    let t = new Talisman()
    if (args[0].value < args[1].value) {
        t.value = 'true'
        t.kind = 'truth'
    } else {
        t.value = 'false'
        t.kind = 'truth'
    }
    return t
}
