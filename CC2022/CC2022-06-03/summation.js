// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

//P: given a valid whole number, greater than 0
//R: return the sum of all numbers to that number
//E:

function summation(num){
    //create loop until num
    //add index to return variable
    let sum = 0
    for(let i = 1; i <= num; i++){
        sum += i
    }
    return sum
}

console.log(summation(8))//36
console.log(summation(2))//3