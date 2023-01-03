// Define a method/function that removes from a given array of integers all the values contained in a second array.

//given an array of numbers representing a base set and another array of numbers representing a key
//return the base set array with the key numbers removed

function removeKeys(base, keys){
    //filter array and only allow elements that are not included in the keys
    //return filtered array
    return base.filter(e => !keys.includes(e))
}

console.log(removeKeys([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]))//[2, 2, 4]
console.log(removeKeys([1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2]))//[5, 6, 7, 8]