// Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

// Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.

//given an array of single digit numbers, always numbers, never negative
//return an array of single digit numbers with each number incremented according to its position

function incrementer(nums) {
    //map array
    //find sum of current + idx +1
    //check if sum is greater than 9
    //if so, convert to string and return the last digit in type number
    //else return current reassignment to sum
    return nums.map((n, i) => {
        let sum = n + i + 1
        if (sum >= 10) {
            sum = sum.toString()
            n = +sum[sum.length - 1]
        } else {
            n = sum
        }
        return n
    })
}

console.log(incrementer([1, 2, 3, 4, 5, 6, 7]))//[2,4,6,8,0,2,4]