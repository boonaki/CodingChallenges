// Create a method all which takes two params:

//     a sequence
//     a function (function pointer in C)

// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

//given an array of numbers, always whole, as well as a function that returns a boolean
//return true if all the numbers pass the test in the given in passed function

function all(arr, func){
    let i = 0
    while(i < arr.length){
        if(!func(arr[i])) return false
        i++
    }
    return true
}

console.log(all([1,2,3,4,5], function(v){return v<9}), true)
console.log(all([1,2,3,4,5], function(v){return v>9}), false)