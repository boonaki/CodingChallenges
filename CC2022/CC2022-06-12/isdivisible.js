// Your task is to create a function to check if an integer number is divisible by both integers a and b.

//P: Given 3 whole numbers, no special cases
//R: return a boolean if the number is divisble by the other 2 numbers (a,b)
//E:

function isDivisible(num,a,b){
    //check if num % a && num % b === 0
    return num % a === 0 && num % b === 0
}

console.log(isDivisible(12,2,6))//true
console.log(isDivisible(10,2,6))//false
