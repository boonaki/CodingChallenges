// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.
//If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

//P: given an array of whole integers and a sum value, whole but pos/neg
//R: return an array of the first 2 values that equal the sum. if there are two then return the pair whose second index is the smallest
//E:

function sumPairs(ints, sum){
    //create empty object to keep track of numbers and indexes
    //loop through ints
    //find pair that adds up to sum
    //if pair is in object, then return current pair and current number
    //else save number index in obj
    //return null if nothing found after loop
    let numbers = {}
    for(let i = 0; i < ints.length; i++){
        let currentNum = ints[i]
        let pair = sum - currentNum
        if(numbers[pair] !== undefined){
            return [pair, currentNum]
        }
        if(numbers[currentNum] === undefined){
            numbers[currentNum] = i
        }
    }
    return null
}

console.log(sumPairs([11, 3, 7, 5], 10))//[3,7]
console.log(sumPairs([11, 3, 7, 5], 10))//[3,7]
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6))//[0,-6]
console.log(sumPairs([20, -13, 40], -7))//undefined