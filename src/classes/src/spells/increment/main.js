export default (args, code) => {
    args[0].value += args[1].value
    return args[0]
}
