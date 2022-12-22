// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

// Assume that the input n will always be a positive integer.

//given a positive number, always whole
//return a number representing the sum of all the cubed values from 1 to n

function sumCubes(n){
    //recursion
    //base case is 1, return 1
    //else, cube current and recurse
    if (n === 1) return 1
    return n**3 + sumCubes(n-1)
}

console.log(sumCubes(1), 1);
console.log(sumCubes(2), 9);
console.log(sumCubes(3), 36);
console.log(sumCubes(4), 100);