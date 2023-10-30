// Create a function each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n

function eachCons(array, n) {
    //create array
	let arr = [];
    //run through length of given array
    //for each element in the array
    //create new array given start (i) and end (i + n)
    //push new array into arr
    for(let i = 0; i < array.length; i++){
        arr.push(array.slice(i,i + n));
    }
    //remove excess arrays inside arr that do not equal the length of the number
    return arr.filter((smallArray) => smallArray.length === n)
}

console.log(eachCons([3, 5, 8, 13], 1)) //should equal [ [ 3 ], [ 5 ], [ 8 ], [ 13 ] ]
console.log(eachCons([3, 5, 8, 13], 2)) //should equal [ [ 3, 5 ], [ 5, 8 ], [ 8, 13 ] ]
console.log(eachCons([3, 5, 8, 13], 3)) //should equal [ [ 3, 5, 8 ], [ 5, 8, 13 ] ]
