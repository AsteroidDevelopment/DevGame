import Talisman from "../../../talisman.js"

export default (args, code) => {
    let t = new Talisman()
    t.set(args[0])

    if (t.kind === 'letter' && Number.parseInt(t.value)) {
        t.value = Number.parseInt(t.value)
        t.kind = 'number'
    }

    else if (t.kind === 'letter') {
        t.value = '1'
        t.kind = 'number'
    }

    else if (t.kind === 'truth' && t.value === 'true') {
        t.value = '1'
        t.kind = 'number'
    }

    else if (t.kind === 'truth' && t.value === 'false') {
        t.value = '0'
        t.kind = 'number'
    }
    
    else if (t.kind === 'blank') {
        t.value = 0
        t.kind = 'number'
    }

    return t
}
