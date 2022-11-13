//given an array of 3 numbers, always length of 3, not sorted
//return the index of the number that is in between the other 2 values

function findMiddle(arr) {
    //create a copy of the array
    //sort and grab middle value (idx 1)
    //return index of the middle value from original array
    let mid = [...arr].sort((a, b) => a - b)[1]
    return arr.indexOf(mid)
}

console.log(findMiddle([2, 3, 1]))//0
console.log(findMiddle([20, 13, 1]))//1