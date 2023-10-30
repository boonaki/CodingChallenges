// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

//P: given 2 integer values, and a character (type string). accepted characters are +,-,/,*
//R: return the value of the 2 given integers with the given integers, if numbers arent numbers or character is invalid, return "unknown value"
//E:    

function simpleCalc(a, b, op) {
    //create object with operators and expression values
    //return the value based on given op key
    let operators = {
        '+': a + b,
        '-': a - b,
        '*': a * b,
        '/': a / b
    }
    return operators[op] ? operators[op] : 'unknown value'
}

console.log(simpleCalc(1, 2, '+'))//3
console.log(simpleCalc(1, 2, '-'))//-1
console.log(simpleCalc(1, 2, '*'))//2
console.log(simpleCalc(6, 2, '/'))//3
console.log(simpleCalc(6, 2, '&'))//'unknown value'
console.log(simpleCalc(6, 'h', '/'))//'unknown value'