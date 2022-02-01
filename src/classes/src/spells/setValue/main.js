export default (args, code) => {
    args[0].value = args[1].value
    args[0].kind = args[1].kind
    return args[0]
}
