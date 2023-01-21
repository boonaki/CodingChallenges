// Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.

// A Pythagorean Triple consists of arranging 3 integers, such that:

// a2 + b2 = c2

//given an array of integers, always valid and always with a length of 3 [3 integers]
//return true or false if they are valid numbers to use in pythagorean theorem

function pythagorean(arr){
    //sort array
    //exponentialize each value then return the check for the evaluation
    arr.sort((a,b) => a-b)
    return arr[0]**2 + arr[1]**2 === arr[2]**2
}

console.log(pythagorean([5,3,4]), true)
console.log(pythagorean([3,4,5]), true)
console.log(pythagorean([100,3,999]), false)