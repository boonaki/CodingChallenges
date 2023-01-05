// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.

//given a starting number, always greater than 0 and less than 30, find the end result of the fibonacci sequence 
//return a number representing the point in the fibonacci sequence where the given number sits at

function fibonacci(n){
    //check if num is less than 2, if so then return the number
    //else then make a recursive call to get the sum of n-1 and n-2
    if(n < 2) return n
    return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(2), 1)
console.log(fibonacci(3), 2)
console.log(fibonacci(4), 3)
console.log(fibonacci(5), 5)