// #To square(root) or not to square(root)

// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
//EXAMPLE
// If the number has an integer square root, take this, otherwise square the number.
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]

// The input array will always contain only positive numbers and will never be empty or null.

// The input array should not be modified!

function squareOrSquareRoot(array) {
    return array.map((num) => Math.sqrt(num) === Math.floor(Math.sqrt(num)) ? Math.sqrt(num) : Math.pow(num, 2)) 
}

console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ])) //should output [2, 9, 3, 49, 4, 1]
console.log(squareOrSquareRoot([ 100, 101, 5, 5, 1, 1 ])) //should output [10, 10201, 25, 25, 1, 1]
console.log(squareOrSquareRoot([ 1, 2, 3, 4, 5, 6 ])) // should output [ 1, 4, 9, 2, 25, 36 ]