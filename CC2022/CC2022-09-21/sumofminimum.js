// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

//given an array of subarrays containing integers, all positive values
//return the sum of the minimum numbers from each array
//E:

function minSum(arr){
    //map array converting each array to its smallest value
    //return reduced array
    arr = arr.map((array) => array = Math.min(...array))
    return arr.reduce((a,c) => a+c)
}

console.log(minSum([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))//9
console.log(minSum([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]))//76