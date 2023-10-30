// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them. 
// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply". 

//P: given 3 args, the first value, the second and the operator (typeof string). both values will always be positive
//R: return the correct value through the correct math expression decided by the operator string
//E:

function arithmetic(a,b,operator){
    //create switch statement for operator
    //switch operators
    //return sum
    switch(operator){
        case 'add' :
          return a + b
          break;
        case 'subtract' :
          return a-b
          break;
        case 'divide' :
          return a/b
          break;
        case 'multiply' :
          return a*b
          break;
    }
}

console.log(arithmetic(4,4,'add'))//8
console.log(arithmetic(4,4,'multiply'))//16
console.log(arithmetic(4,4,'divide'))//1
console.log(arithmetic(4,4,'subtract'))//0