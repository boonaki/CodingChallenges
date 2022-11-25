// Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null

//given 2 numbers and a operator, always valid numbers, operator can be + - * /
//return the answer to the given expression in type number, or 'null' if operator is invalid or dividing by 0

function calc(num1, op, num2) {
    //create operator array
    //check if op is not in array, if so return null
    //switch if op is '+', add
    //if '-', subtract
    //if '*', multiply
    //if '/', divide
    //if divide check if num2 is 0 and if so return null, if not return division
    let ops = ['+', '-', '*', '/']
    if (!ops.includes(op)) {
        return null
    }
    switch (op) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num2 === 0 ? null : num1 / num2
    }
}

console.log(calc(3.2, '+', 8))//11.2
console.log(calc(3, '*', 2))//6
console.log(calc(3, '-', 2))//1
console.log(calc(4, '/', 0))//'null'
