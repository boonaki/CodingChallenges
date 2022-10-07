// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

//given an array of integers, always whole never negative
//return the first instance of the digit with the largest length

function findLongest(arr) {
    //find max value in array
    //filter out all integers in array that dont have the same length as the max value
    //return the first element in filtered array
    let bl = Math.max(...arr)
    arr = arr.filter((num) => {
        return num.toString().length === bl.toString().length
    })
    return arr[0]
}

console.log(findLongest([1, 10, 100]))//100
console.log(findLongest([42, 110, 100]))//110
console.log(findLongest([17, 18, 1]))//17

