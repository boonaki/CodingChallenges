// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

//given an array of integers
//return an array only containing the 2 highest integers in the array, sorted greatest to least

function twoHighest(arr) {
    //sort greatest to least
    //convert to set
    //slice from 0 to 2 and return
    arr.sort((a, b) => b - a)
    arr = [...new Set(arr)]
    return arr.slice(0, 2)
}

console.log(twoHighest([15, 20, 20, 17]), [20, 17])