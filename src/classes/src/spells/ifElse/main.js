export default (args, code) => {
    let secondElse = args[0].kind === 'truth' && args[0].value === 'false' ||
        args[0].kind === 'number' && args[0].value == 0 || args[0].kind === 'blank'

    return secondElse ? args[2] : args[1]
}
