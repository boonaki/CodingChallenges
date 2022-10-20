// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

//     the array can't be empty
//     only non-negative, single digit integers are allowed


//given an array of integers, never empty, may consist of multi digit
//return the array with the joined array of numbers incremented

function upArray(arr){
    //join array, join and convert to number and add 1
    //convert back to string and split and return
    arr = +arr.join('') + 1
    return arr.toString().split('')
}

console.log(upArray([2,3,9]))//[2, 4, 0]
console.log(upArray([4,3,2,5]))//['4', '3', '2', '6']