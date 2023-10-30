// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

//     The starting array sequence is [1,2,3,4,5,6,7,8,9]
//     The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
//     Your function should return the int 5.

// If no number was deleted from the starting array, your function should return the int 0.

//given 2 arrays of numbers, each can be empty
//return the value of the number that is missing between the two given arrays, where if none is missing return 0

function lostNum(arr, mixed) {
    //sort both strings from least to greatest
    //loop through length of arr
    //if mixed[0] is not equal to arr[0]
    //return current number
    //else return 0
    arr.sort((a, b) => a - b)
    mixed.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== mixed[i]) {
            return arr[i]
        }
    }
    return 0
}

console.log(lostNum([1, 2, 3, 4, 5], [3, 4, 1, 5]))//2
console.log(lostNum([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]))//0