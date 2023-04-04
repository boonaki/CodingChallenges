// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

//given a number, always whole but can be pos/neg
//return a number representing the sum of triangular numbers up to and inlcuding the nth number

function sumTriangular(n){
    //base case
    //check if negative
    //check if 
    if(n < 0) return 0
    if(n === 1) return 1
    let sum = (n * (n + 1)) / 2
    return sum + sumTriangular(n-1)
}

console.log(sumTriangular(6), 56)
console.log(sumTriangular(-291), 0)
console.log(sumTriangular(34), 7140)