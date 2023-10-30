// Given an array of integers your solution should find the smallest integer.

// For example:

//     Given [34, 15, 88, 2] your solution will return 2
//     Given [34, -345, -1, 100] your solution will return -345

// You can assume, for the purpose of this kata, that the supplied array will not be empty.

//P: Given an array of randoms whole numbers
//R: Return smallest number in array
//E:

function findSmallestInt(arr){
    //sort array from smallest to largest
    //return first num in arr
    arr.sort((a,b) => a-b)
    return arr[0]
}

console.log(findSmallestInt([78,56,4,232,12]))//4
console.log(findSmallestInt([34, -345, -1, 100]))//-345