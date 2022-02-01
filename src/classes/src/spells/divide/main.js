import Talisman from "../../../talisman.js"

export default (args, code) => {
    let t = new Talisman()
    t.set(args[0])
    t.value = Math.floor(args[0].value / args[1].value)
    return t
}
