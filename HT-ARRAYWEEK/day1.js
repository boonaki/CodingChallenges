// Today's task is to write a function that will check equality between 2 arrays with a particular structure.

// The arrays will:

//     Be of equal size
//     Will each contain some number (X) arrays
//     Each inner array will contain that same number (X) primitive elements

// All the nested primitives within each array must strictly match to return a true result. Any mismatches will return false.

//given 2 arrays of equal size, each containing subarrays of characters, each of equal length
//return a boolean where true if all arrays match

function matchArray(arr1,arr2){
    //loop through array
    //loop through each letter,
    //if letter is not equal to letter in arr2 then return false
    //return true
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr1[i].length; j++){
            if(arr1[i][j] !== arr2[i][j]){
                return false
            }
        }
    }
    return true
}

console.log(matchArray([['a','b','c'],['d','e','f'],['g','h','i']],[['a','b','c'],['d','e','f'],['g','h','i']]))//true
console.log(matchArray([['a','b','c'],['d','e','f'],['g','h','i']],[['a','B','c'],['d','E','f'],['g','H','i']]))//false