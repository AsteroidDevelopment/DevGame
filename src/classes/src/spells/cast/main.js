export default (args, code) => {

    let output = document.getElementById('output')
    output.innerHTML += `<div>${args[0].value}</div>`

    game.compiler.output.push(args[0].value)

    return args[0]
}