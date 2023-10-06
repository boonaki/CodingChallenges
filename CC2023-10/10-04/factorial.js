// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

//given a number, always valid always whole
//return the factorial for the given number

function factorial(n){
   //define base case
   //n * factorial n-1
   if(n < 2) return 1
   return n * factorial(n-1);
}

console.log(factorial(0))//1
console.log(factorial(1))//1
console.log(factorial(2))//2
console.log(factorial(5))//120