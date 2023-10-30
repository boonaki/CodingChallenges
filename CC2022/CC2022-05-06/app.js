//In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.


function findDifference(a, b) {
    return Math.abs(a.reduce((acc, curr) => acc*curr, 1) - b.reduce((acc, curr) => acc*curr,1))
}

console.log(findDifference([3, 2, 5], [1, 4, 4])) // should output 14
console.log(findDifference([9, 7, 2], [5, 2, 2])) // should output 106
console.log(findDifference([11, 2, 5], [1, 10, 8])) // should output 30
