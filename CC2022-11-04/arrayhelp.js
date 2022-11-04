// Extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

//     square() must return a copy of the array, containing all values squared
//     cube() must return a copy of the array, containing all values cubed
//     average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
//     sum() must return the sum of all array values
//     even() must return an array of all even numbers
//     odd() must return an array of all odd numbers

// Note: the original array must not be changed in any case!

//given an array for each helper function, define 6 different helper functions on the Array prototype
//return a copy of the array for each or NaN if array is empty (for sum and avg)

//square each value
Array.prototype.square = function () {
    return this.map(e => e ** 2)
}

//cube each value
Array.prototype.cube = function () {
    return this.map(e => e ** 3)
}

//sum of every value
Array.prototype.sum = function () {
    if (this.length < 1) {
        return 0
    } else {
        return this.reduce((a, c) => a + c)
    }
}

//find average
Array.prototype.average = function () {
    if (this.length < 1) {
        return NaN
    } else {
        return this.reduce((a, c) => a + c) / this.length
    }
}

//filter all even out
Array.prototype.even = function () {
    return this.filter(e => e % 2 === 0)
}
//filter all odds out
Array.prototype.odd = function () {
    return this.filter(e => e % 2 !== 0)
}

var nums = [1,2,3,4,5]
console.log(nums.square())//[ 1, 4, 9, 16, 25 ]
console.log(nums.cube())//[ 1, 8, 27, 64, 125 ]
console.log(nums.sum())//15
console.log(nums.average())//3
console.log(nums.even())//[2,4]
console.log(nums.odd())//[1,3,5]