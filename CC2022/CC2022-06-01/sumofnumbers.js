// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

//P: given two integers, whole and non-whole, pos/neg, not ordered
//R: return sum of all integers between the two numbers, including the numbers
//E:

function sumOfNumbers(a,b){
    //create arr and sort least to greatest
    //create result variable
    //loop from arr[0] to arr[1]
        //add i to result
    //return result
    let arr = [a,b].sort((a,b) => a-b)
    let result = 0
    for( let i= arr[0]; i <= arr[1]; i++){
        result += i
    }
    return result
}

console.log(sumOfNumbers(3,7))//25
console.log(sumOfNumbers(0,-1))//-1