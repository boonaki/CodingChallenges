// Factorial

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

// 5! = 5 * 4 * 3 * 2 * 1 = 120.

// The value of 0! is 1.

// #Your task

// You have to create the function factorial that receives n and returns n!. You have to use recursion.

//given a number, always whole never negative
//return the factorial of the given number

function factorial(n){
    //if n <= 1, return 1
    //else
    //return n * fac(n-1)
    if(n <= 1){
        return 1
    }
    return n * factorial(n-1)
}

console.log(factorial(5))//120
console.log(factorial(0))//1
console.log(factorial(1))//1