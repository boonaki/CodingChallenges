// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

//P: Given an array of 1's and 0's
//R: return decimal equivalent of binary array
//E:

function binaryArrayToNumber(arr){
    //reverse array
    //for each number, multiply num by 2^idx, and reduce to single value
    //return reduced value
    arr = arr.reverse().reduce((acc, curr, idx) => acc + curr * (2**idx),0)
    return arr
}

console.log(binaryArrayToNumber([0,0,0,1]))//1
console.log(binaryArrayToNumber([0,0,1,0]))//2
console.log(binaryArrayToNumber([1,1,1,1]))//15
console.log(binaryArrayToNumber([0,1,1,0]))//6
