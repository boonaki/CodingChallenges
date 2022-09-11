// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

//     Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
//     Each part will be in a string
//     Elements of a pair must be in the same order as in the original array.


//P: given an array of strings
//return an array of subarrays containg two sets of strings each with one word transferring over from the second to the first for each subarray
//E:

function partList(arr){
    //define outer array and placeholder
    //loop through the length of the array starting at 1
    //re-init placeholder to an empty array
    //push a sliced portion of the array from 0 to i, to the placeholder
    //push another sliced portion from i, into placeholder
    //push placeholder array into new array
    let outer = []
    let holder = []
    for(let i = 1; i < arr.length; i++){
        holder = []
        holder.push(arr.slice(0,i).join(' '))
        holder.push(arr.slice(i).join(' '))
        outer.push(holder)
    }
    return outer
}

console.log(partList(["I", "wish", "I", "hadn't", "come"]))//[["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]]