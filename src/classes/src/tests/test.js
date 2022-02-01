import add from '../spells/add/test.js'
import subtract from '../spells/subtract/test.js'
import multiply from '../spells/multiply/test.js'
import divide from '../spells/divide/test.js'
import square from '../spells/square/test.js'
import exponent from '../spells/exponent/test.js'
import increment from '../spells/increment/test.js'


import equal from '../spells/equal/test.js'
import not from '../spells/not/test.js'
import less from '../spells/less/test.js'
import more from '../spells/more/test.js'
import or from '../spells/or/test.js'

import ifThen from '../spells/ifThen/test.js'
import ifElse from '../spells/ifElse/test.js'
import times from '../spells/times/test.js'

import numberfy from '../spells/numberfy/test.js'
import truthify from '../spells/truthify/test.js'
import wordify from '../spells/wordify/test.js'

// cast 
// exit
// whileSpell
// import setValue from '../spells/setValue/test.js'
// import returnValue from '../spells/returnValue/test.js'
//import pop from '../spells/pop/test.js'

let tests = {
    add,
    subtract,
    multiply,
    divide,
    square,
    exponent,
    increment,
    equal,
    not,
    less,
    more,
    or,
    ifThen,
    ifElse,
    times,
    numberfy,
    truthify,
    wordify,
}

let compare = (output, expected) => {
    //First check the length for an easy tell
    let check = output.length === expected.length
    //Then check each one
    if (check) {
        output.forEach((o, i) => o == expected[i] ? "" : check = false)
    }

    return check
}



export default () => {

    Object.entries(tests).forEach((cat) => {

        let total = 0

        cat[1].forEach((test, i) => {
            test[0]()
            game.compiler.run()

            if( compare(game.compiler.output, test[1]) ) {
                total += 1
            } else {
                console.log(cat[0], "test", i, " failed- expected: ", test[1], "and got: ", game.compiler.output)
            }

            game.compiler.reset()
        })

        let percent = total/cat[1].length
        
        console.log( `${percent === 1 ? 'passed' : 'FAILED'} ${cat[0]} ${total}/${cat[1].length}`)

    })
}