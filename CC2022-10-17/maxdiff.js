// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

//     lst contains integers, that means it may contain some negative numbers
//     if lst is empty or contains a single element, return 0
//     lst is not sorted


//given an array of integers, can be negative always whole, not sorted
//return the difference of the smallest and greatest values in the array

function maxDiff(arr){
    //check if length is greater than 0
    //if so then find math max of arr and subtract from math min of arr
    //if not return 0
    return arr.length > 0 ? Math.max(...arr) - Math.min(...arr) : 0
}

console.log(maxDiff([4,1,2,2,5]))//4
console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6]))//11
console.log(maxDiff([]))//0