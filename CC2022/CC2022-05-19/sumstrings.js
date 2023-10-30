//Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

// Notes:

//     If either input is an empty string, consider it as zero.

//     Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

//P: 2 strings, always be numbers but will never exceeed 32bits int limit, if empty num = 0
//R: return the sum as a string
//E:

function sumStr(){
    //take both strings, convert to number
    //add converted numbers
    //convert sum to string and return
    let sum = [a,b].map((num) => Number(num)).reduce((a,c) => a + c)
    return sum.toString()
}

console.log(sumStr("4", "5"))//"9"
console.log(sumStr("4", "2"))//"6"
console.log(sumStr("9", "9"))//"18"

