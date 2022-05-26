// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example

// [2, 1, 10]  -->  9

//P: given an array of integers
//R: return an integer that represents the sum of the differences
//E:

function sumOfDifferences(arr){
    //loop through array
    //find differences, filter out any invalid values
    //reduce arr to find sum
    //return num
    arr.sort((a,b) => b-a)
    arr = arr.map((num,idx) => num - arr[idx+1]).filter((num) => num)
    return arr.length >= 1 ? arr.reduce((a,c) => a + c) : 0
}

console.log(sumOfDifferences([2,1,10]))//9
console.log(sumOfDifferences([-3, -2, -1]))//2