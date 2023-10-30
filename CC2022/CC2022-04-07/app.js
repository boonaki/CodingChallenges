// Write a function that takes an array of numbers and returns the sum of the numbers.
// The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0

function sum(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0)
};

console.log(sum([0,1,2,3,4])) // should equal 10
console.log(sum([5,10.4,2,3.3,4])) // should equal 24.7



