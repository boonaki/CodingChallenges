// Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

//given an array of subarrays, of various lengths, all containing number values
//return a number value representing the total number of combinations that can be made from choosing one from each subarray

function solve(arr){
    //map and convert each element to its length by spreading the current and creating a new set, and store in new array
    //return reduced array, multiplying each element
    const lengths = arr.map(a => [...new Set(a)].length)
    return lengths.reduce((a,c) => a*c,1)
}

console.log(solve([[1,2],[4],[5,6]]))//4
console.log(solve([[1,2],[3,4],[5,6]]))//8
console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]))//72