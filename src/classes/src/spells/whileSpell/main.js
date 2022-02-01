import Talisman from "../../../talisman.js"

export default (args, code) => {
    let t = new Talisman()
    t.value = 'true'
    t.kind = 'truth'

    return t
}
