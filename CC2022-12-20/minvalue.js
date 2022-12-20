// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

//given an array of number, and a string
//return either the min value or min value index based on the string paramter

function min(arr, toReturn) {
    //define new varaible holding min value of array
    //check if toreturn is equal to value, if so return
    //if equal to index return indexof the number
    let minVal = Math.min(...arr)
    if (toReturn === 'value') return minVal;
    if (toReturn === 'index') return arr.indexOf(minVal)
}

console.log(min([1, 2, 3, 4, 5], 'value'), 1)
console.log(min([1, 2, 3, 4, 5], 'index'), 0)