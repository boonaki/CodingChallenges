// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.

//given a starting number, always greater than 0 and less than 30, find the end result of the fibonacci sequence 
//return a number representing the point in the fibonacci sequence where the given number sits at

function fibonacci(n){
    //define array of 0 and 1
    //starting from 2, loop to the number
    //make current the sum of the 2 previous
    //return number n in array
    let arr = [0,1]
    for(let i = 2; i <= n; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr[n]
}

console.log(fibonacci(2), 1)
console.log(fibonacci(3), 2)
console.log(fibonacci(4), 3)
console.log(fibonacci(5), 5)