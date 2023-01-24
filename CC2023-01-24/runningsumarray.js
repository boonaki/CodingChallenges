// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

function runningSum(arr){
    let lastSum = 0
    return arr.map((x) => lastSum += x);
}

console.log(runningSum([1,2,3,4,5]), [1,3,6,10,15])