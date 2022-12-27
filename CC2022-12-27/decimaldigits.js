// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

//given a number, always valid
//return the length of the given number

function digitCount(n){
    //convert to string and grab length
    return n.toString().length
}

console.log(digitCount(5), 1)
console.log(digitCount(12345), 5)
console.log(digitCount(12), 2)