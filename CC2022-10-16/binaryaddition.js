// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

//given 2 numbers, could be negative, always whole
//return the binary number of the sum of the 2 given numbers, in type string

function addBinary(a,b){
    //add a and b, check if greater than 0, if greater than 0, use toString(2) technique, where if not then return 0
    return a+b > 0 ? (a+b).toString(2) : 0
}

console.log(addBinary(1,2))//11
console.log(addBinary(5,9))//1110