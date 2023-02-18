// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

//given an array of numbers, could be null
//return the sum of the highest and lowest numbers

function sumArray(arr) {
    //check if arr is null or length is less than 2, if so return 0
    //sort, slice first and last then reduce and return
    if (!arr) {
        return 0
    } else if (arr.length <= 2) {
        return 0
    }
    return arr.sort((a, b) => a - b).slice(1, -1).reduce((a, c) => a + c)
}

console.log(sumArray(null), 0)
console.log(sumArray([3, 5]), 0)
console.log(sumArray([3, 5, 8]), 5)
console.log(sumArray([-6, -20, -1, -10, -12]), -28)