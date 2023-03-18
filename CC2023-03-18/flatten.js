// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

//given an array, always an array but may be nested
//return the array, flattened by only 1 level

function flatten(arr){
    return arr.flat()
}

console.log(flatten([]), [])
console.log(flatten([1, 2, 3]), [1, 2, 3])
console.log(flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]), [1, 2, 3, "a", "b", "c", 1, 2, 3])
console.log(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]), [3, 4, 5, [9, 9, 9], "a,b,c"])