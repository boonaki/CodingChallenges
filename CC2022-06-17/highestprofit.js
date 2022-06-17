// Write a function that returns both the minimum and maximum number of the given list/array. 

//P: given an array of valid whole numbers
//R: return an array with only the minimum and maximum values
//E:

function minMax(arr){
    //store min of array into variable
    //store max of array into variable
    //return variables in array
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    return [min,max]
}

console.log(minMax([1,2,3,4,5]))//[1,5]
console.log(minMax([1,222]))//[1,222]
console.log(minMax([5,5,5]))//[5,5]