// Given a sequence of numbers, find the largest pair sum in the sequence.

//given an array of integers
//return the sum of the 2 greatest numbers in the array
//E:

function largestPairSum(arr){
    //sort numbers from greatest to least, then slice first 2 and return the sum of those 2
    arr = arr.sort((a,b) => b-a).slice(0,2)
    return arr[0] + arr[1]
}

console.log(largestPairSum([10,14,2,23,19]))//42
console.log(largestPairSum([-100,-29,-24,-19,19]))//0
console.log(largestPairSum([1,2,3,4,6,-1,2]))//10
