// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

//given an array of numbers, always whole,
//return leftmost pivot index, if none return -1

function pivotIndex(arr){
    //loop array
    //slice left and reduce
    //slice right and reduce
    //check if both are equal return index
    //if not return -1
    for(let i = 0; i < arr.length; i++){
        let left = arr.slice(0, i).reduce((a,c) => a + c, 0)
        let right = arr.slice(i+1, arr.length).reduce((a,c) => a + c, 0)
        if(left === right){
           return i
        }
    }
    return -1;
}

console.log(pivotIndex([1,7,3,6,5,6]), 3)