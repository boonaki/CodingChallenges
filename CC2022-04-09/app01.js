// Given two integer arrays a, b, both of length >= 1, 
// create a program that returns true if the sum of the squares 
// of each element in a is strictly greater than the sum of the cubes of each element in b.

function arrayMadness(a, b) {
    return a.map((num) => Math.pow(num, 2)).reduce((acc, cur) => acc + cur) > b.map((num) => Math.pow(num, 3)).reduce((acc, cur) => acc + cur)
}

console.log(arrayMadness([4,5,6],[1,2,3])) //should equal true
console.log(arrayMadness([5,6,7],[4,5,6])) //should equal false
console.log(arrayMadness([4,5,6],[3,4,5])) //should equal false
console.log(arrayMadness([3,4,5],[2,3,4])) //should equal false
console.log(arrayMadness([2,3,4],[1,2,3])) //should equal false
console.log(arrayMadness([1,2,3],[0,1,2])) //should equal true