// Write a function which calculates the average of the numbers in a given list.

//P: given an array of numbers, can be empty
//R: return the average of the numers (sum/length)
//E:

function calcAvg(nums){
    //check if nums is empty
    //reduce to sum, then divide by length
    //return value
    if(nums.length === 0){
        return 0
    }
    return nums.reduce((acc,curr) => acc + curr, 0) / nums.length
}

console.log(calcAvg([1,1,1]))//1
console.log(calcAvg([1,2,3]))//2
console.log(calcAvg([1,2,3,4]))//2.5