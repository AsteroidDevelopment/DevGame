export default  [
    {
        name: 'cast',
        numberIngredients: 1,
        categories: ['basic'],
        unlock: 0,
        text: {
            description: "Casts a value to the screen, prints it out.",
            args: ["What you want to print out to the screen."],
            examples: [""],
            returns: "value of ingredient"
        }
    },
    {
        name: 'add',
        numberIngredients: 2,
        display: 'combine',
        categories: ['basic', 'math'],
        unlock: 4,
        text: {
            description: "Adds two values together and returns it.",
            args: ["The first thing to add.", "The second thing to add."],
            examples: ["Add(a b) => 'ab'", "Add(1 1) => '2'", "Add(1 a) => '1a'"],
            returns: "new talisman with result"
        }
    },
    {
        //called on a talisman and with a rune. for a number talisman/rune, basic subtraction, for a letter t/r, remove those letters.
        name: 'subtract',
        numberIngredients: 2,
        display: 'remove',
        categories: ['math'],
        unlock: 12,
        text: {
            description: "Removes the second value from the first.",
            args: ["The thing to take away from.", "The second thing to take away."],
            examples: ["Remove(9 2) => '7'", "Remove('apple' 'p') => 'ale'"],
            returns: "new talisman with result"
        }
    },
    {
        //called on a talisman. Removes the last character and returns a talisman of the same char/type.
        name: 'pop',
        numberIngredients: 1,
        display: 'chisel',
        categories: ['basic', 'math', 'string'],
        unlock: 12,
        text: {
            description: "Removes the end rune on a talisman.",
            args: ["What to pop from."],
            hints: ["This spell changes the value of what it's called on.", "Make sure to catch the result to get the character removed."],
            examples: [],
            changes: true,
            returns: "a talisman with the removed character"
        }
    },
    {
        name: 'setValue',
        numberIngredients: 2,
        display: 'change',
        categories: ['talisman', 'string'],
        unlock: 12,
        text: {
            description: "Updates the value of a talisman.",
            args: ["Which talisman to update", "What to set it to"],
            hints: [],
            examples: [],
            changes: true,
            returns: "the talisman"
        }
    },
    {
        name: 'numberfy',
        numberIngredients: 1,
        categories: ['talisman', 'math'],
        unlock: 12,
        text: {
            description: "Converts the talimsan type to number.",
            args: ["Which talisman to convert"],
            hints: [],
            examples: [],
            returns: "a new talisman"
        }
    },
    {
        name: 'truthify',
        numberIngredients: 1,
        categories: ['talisman', 'logic'],
        unlock: 12,
        text: {
            description: "Converts the talimsan type to truth.",
            args: ["Which talisman to convert"],
            hints: [],
            examples: [],
            returns: "a new talisman"
        }
    },
    {
        name: 'wordify',
        numberIngredients: 1,
        categories: ['talisman', 'string'],
        unlock: 12,
        text: {
            description: "Converts the talimsan type to word.",
            args: ["Which talisman to convert"],
            hints: [],
            examples: [],
            returns: "a new talisman"
        }
    },
    {
        name: 'ifThen',
        numberIngredients: 2,
        categories: ['logic'],
        unlock: 12,
        text: {
            description: "Evaluates the first ingredient to see if you should use the second.",
            args: ["What to see is true or false", "What to do if it's true"],
            hints: [],
            examples: [],
            returns: "false- if false; the value if true"
        }
    },
    {
        name: 'ifElse',
        numberIngredients: 3,
        categories: ['logic'],
        unlock: 12,
        text: {
            description: "Evaluates the first ingredient, to see whether it should do the first or second.",
            args: ["What to see is true or false", "What to do if it's true", "What to do if it's false"],
            hints: [],
            examples: [],
            returns: "the value of the executed statement"
        }
    },
    {
        name: 'equal',
        numberIngredients: 2,
        display: 'isEqual',
        categories: ['logic', 'basic'],
        unlock: 12,
        text: {
            description: "Checks to see whether two runes are equal.",
            args: ["First thing to compare", "Second thing to compare"],
            hints: [],
            examples: [],
            returns: "truth rune with the result"
        }
    },
    {
        name: 'more',
        numberIngredients: 2,
        display: 'isGreaterThan',
        categories: ['logic'],
        unlock: 12,
        text: {
            description: "Checks to see whether the first rune is more than the second.",
            args: ["What you want to see is bigger", "What to compare against"],
            hints: [],
            examples: [],
            returns: "truth rune with the result"
        }
    },
    {
        name: 'less',
        numberIngredients: 2,
        display: 'isLessThan',
        categories: ['logic'],
        unlock: 12,
        text: {
            description: "Checks to see whether the first rune is less than the second.",
            args: ["What you want to see is smaller", "What to compare against"],
            hints: [],
            examples: [],
            returns: "truth rune with the result"
        }
    },
    {
        name: 'times',
        numberIngredients: 2,
        display: 'repeat',
        categories: ['logic'],
        unlock: 12,
        text: {
            description: "Does something a certain amount of times.",
            args: ["How many times", "What to do"],
            hints: [],
            examples: [],
            returns: ""
        }
    },
    {
        name: 'whileSpell',
        numberIngredients: 2,
        display: 'while',
        categories: ['logic'],
        unlock: 12,
        text: {
            description: "Does something as long as something else is true.",
            args: ["What to check if true or not", "What to repeat"],
            hints: ["While [something is true] do [something else]"],
            examples: [],
            returns: "truth rune with the result"
        }
    },
    
    {
        name: 'or',
        numberIngredients: 2,
        display: 'or',
        categories: ['logic'],
        unlock: 12,
        text: {
            description: "Checks whether one of the two conditions is true.",
            args: ["First condition", "Second condition"],
            hints: [""],
            examples: [],
            returns: "truth rune with the result"
        }
    },
    {
        name: 'not',
        numberIngredients: 1,
        display: 'not',
        categories: ['logic'],
        unlock: 12,
        text: {
            description: "Returns the truth-opposite of the ingrendient",
            args: ["What you want the opposite of"],
            hints: [""],
            examples: [],
            returns: "truth rune with the result"
        }
    },
    {
        name: 'returnValue',
        numberIngredients: 1,
        display: 'return',
        categories: ['logic'],
        unlock: 12,
        text: {
            description: "Exits the existing ritual immediately with the ingredient.",
            args: ["What to return with"],
            hints: [""],
            examples: [],
            returns: "truth rune with the result"
        }
    },
    {
        name: 'increment',
        numberIngredients: 2,
        display: 'increment',
        categories: ['math'],
        unlock: 12,
        text: {
            description: "Increases the value of the talisman by the given amount.",
            args: ["What to increase", "By how much"],
            hints: [""],
            examples: [],
            changes: true,
            returns: "the same talisman with a new value"
        }
    },
    
    {
        name: 'multiply',
        numberIngredients: 2,
        display: 'multiply',
        categories: ['math'],
        unlock: 12,
        text: {
            description: "Multipies the ingredients together.",
            args: ["First value", "Second value"],
            hints: [""],
            examples: [],
            returns: "A new talisman with a new value"
        }
    },
    {
        name: 'square',
        numberIngredients: 1,
        display: 'square',
        categories: ['math'],
        unlock: 12,
        text: {
            description: "Gives the square of the provided value.",
            args: ["Number talisman to square."],
            hints: [""],
            examples: [],
            returns: "A new talisman with a new value"
        }
    },
    
    {
        name: 'exponent',
        numberIngredients: 2,
        display: 'exponent',
        categories: ['math'],
        unlock: 12,
        text: {
            description: "Raises a number to a power.",
            args: ["Number to raise.", "The exponent."],
            hints: [""],
            examples: [],
            returns: "A new talisman with a new value"
        }
    },
    {
        name: 'divide',
        numberIngredients: 2,
        display: 'divide',
        categories: ['math'],
        unlock: 12,
        text: {
            description: "Divides a number by another.",
            args: ["Number to raise.", "The exponent."],
            hints: ["This spell only returns whole numbers, so 5/2 = 2"],
            examples: [],
            returns: "A new talisman with an interger value."
        }
    }



    
]