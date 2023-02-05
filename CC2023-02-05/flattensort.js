// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

//given an array of arrays, containing valid whole integers
//return the array flattened and sorted

function flattenAndSort() {
    //flatten array
    //sort from least to greatest
    //return
    let arr = array.flat()
    arr.sort((a, b) => a - b)
    return arr
}

console.log(flattenAndSort([]), []);
console.log(flattenAndSort([[], []]), []);
console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);