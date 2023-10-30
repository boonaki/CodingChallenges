// Given an array/list of integers, find the Nth smallest element in the array.

//given an array of numbers, always atleast 3 elements, can be negatives, and 0. also given a position in type number
//return the nth smallest number in the given array

function smallest(arr, pos){
    //sort from least to greatest, and grab element from the position minus 1 and return
    return arr.sort((a,b) => a-b)[pos-1]
}

console.log(smallest([1,2,3],2))//2
console.log(smallest([10,12,31,4],4))//31
console.log(smallest([4,9,17,16,15,4,2],5))//15