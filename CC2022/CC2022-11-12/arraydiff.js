//given 2 arrays, each containing numbers, can be empty
//return a new array with all values in second array removed from first

function arrayDiff(arr, diffArr) {
    //filter the first array
    //if the current element is not included in the diffArr
    //return filtered array
    return arr.filter(e => !diffArr.includes(e))
}

console.log(arrayDiff([1, 2, 2, 3, 4], [2, 4]))//[1,3]
console.log(arrayDiff([2, 2, 1, 2, 1, 4, 5, 2], [2]))//[1,1,4,5]