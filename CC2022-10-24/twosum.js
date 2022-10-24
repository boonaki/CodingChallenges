// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

//given an array of numbers, always whole, always with 1 solution, and a target number
//return the indexes of the numbers that sum up to the target in an array

function twoSum(nums, target){
    //for loop for length of nums
    //for loop for length of nums + 1 (next)
    //check if next plus current is equal to target
    //return array with current and target indices as values
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
}

console.log(twoSum([3,2,4], 6))//[1,2]