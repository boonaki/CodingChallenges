// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

//P: given an array of numbers and a target integer value, all whole numbers
//R: return an array with the indexes of the two values that sum up to target
//E:

function twoSum(numbers, target) {
    let firstIdx = 0
    let secondIdx = 0
    numbers.forEach((num, idx) => {
        let first = num
        for (let i = idx + 1; i < numbers.length; i++) {
            if (first + numbers[i] === target) {
                firstIdx = idx
                secondIdx = i
            }
        }
    })
    return [firstIdx, secondIdx]
}

console.log(twoSum([1, 2, 3], 4))//[0,2] || [2,0]
console.log(twoSum([1234, 5678, 9012], 14690))//[1,2] || [2,1]
console.log(twoSum([2, 2, 3], 4))//[0,1] || [1,0]
console.log(twoSum([2, 3, 1], 4))//[1,2] || [2,1]