import Talisman from "../../../talisman.js"

export default (args, code) => {
    let t = new Talisman()

    t.set(args[0])

    t.value = t.value * t.value

    return t
}
