// This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

//given 2 two numbers, always valid. first being coeffecient and second being exponenet
//return a string with the product x exponent-1

function derive(coef, exp) {
    //find product of coef and exp
    //subtract 1 from exp
    //create string from variables and return
    let total = coef * exp
    return `${total}x^${exp - 1}`
}

console.log(derive(7, 8), '56^7')
console.log(derive(5, 9), '45^8')