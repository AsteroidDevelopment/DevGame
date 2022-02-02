export default  [
    {
        name: 'cast',
        numberIngredients: 1,
        categories: ['basic']
    },
    {
        name: 'add',
        numberIngredients: 2,
        display: 'combine',
        categories: ['basic', 'math']
    },
    {
        //called on a talisman and with a rune. for a number talisman/rune, basic subtraction, for a letter t/r, remove those letters.
        name: 'subtract',
        numberIngredients: 2,
        display: 'remove',
        categories: ['math']
    },
    {
        //called on a talisman. Removes the last character and returns a talisman of the same char/type.
        name: 'pop',
        numberIngredients: 1,
        display: 'chisel',
        categories: ['basic', 'math', 'string']
    },
    {
        name: 'setValue',
        numberIngredients: 2,
        display: 'change',
        categories: ['talisman', 'string']
    },
    {
        name: 'numberfy',
        numberIngredients: 1,
        categories: ['talisman', 'math']
    },
    {
        name: 'truthify',
        numberIngredients: 1,
        categories: ['talisman', 'logic']
    },
    {
        name: 'wordify',
        numberIngredients: 1,
        categories: ['talisman', 'string']
    },
    {
        name: 'ifThen',
        numberIngredients: 2,
        categories: ['logic']
    },
    {
        name: 'ifElse',
        numberIngredients: 3,
        categories: ['logic']
    },
    {
        name: 'equal',
        numberIngredients: 2,
        display: 'isEqual',
        categories: ['logic', 'basic']
    },
    {
        name: 'more',
        numberIngredients: 2,
        display: 'isGreaterThan',
        categories: ['logic']
    },
    {
        name: 'less',
        numberIngredients: 2,
        display: 'isLessThan',
        categories: ['logic']
    },
    {
        name: 'times',
        numberIngredients: 2,
        display: 'repeat',
        categories: ['logic']
    },
    {
        name: 'whileSpell',
        numberIngredients: 2,
        display: 'while',
        categories: ['logic']
    },
    
    {
        name: 'or',
        numberIngredients: 2,
        display: 'or',
        categories: ['logic']
    },
    {
        name: 'not',
        numberIngredients: 1,
        display: 'not',
        categories: ['logic']
    },
    {
        name: 'returnValue',
        numberIngredients: 1,
        display: 'return',
        categories: ['logic']
    },
    {
        name: 'increment',
        numberIngredients: 2,
        display: 'increment',
        categories: ['math']
    },
    
    {
        name: 'multiply',
        numberIngredients: 2,
        display: 'multiply',
        categories: ['math']
    },
    {
        name: 'square',
        numberIngredients: 1,
        display: 'square',
        categories: ['math']
    },
    
    {
        name: 'exponent',
        numberIngredients: 2,
        display: 'exponent',
        categories: ['math']
    },
    {
        name: 'divide',
        numberIngredients: 2,
        display: 'divide',
        categories: ['math']
    }



    
]