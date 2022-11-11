// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

//given 2 arrays of numbers, always valid but may be of equal length or difference of 1
//first array given will be an ordered list from 1 to N, but may be empty
//return the number from the first array that is missing from the second, if none removed then return 0

function lostNum(arr, mixedArr) {
    //filter the arr
    //for element, if element is not included in the mixedArr, then return the current value
    //after loop if none found, return 0
    return arr.filter(e => !mixedArr.includes(e))[0] || 0
}

console.log(lostNum([1, 2, 3, 4, 5], [1, 3, 4, 5]))//2
console.log(lostNum([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]))//0