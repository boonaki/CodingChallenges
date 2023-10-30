// Given an array of numbers, sort them in such a manner that all the odd numbers in the array are sorted in ascending order and the even numbers are sorted in descending order after the last odd number. For example [1,2,3,4,5,6,7,8,9] produces the output [1,3,5,7,9,8,6,4,2]. If the array contains decimals, round them down while checking for odd/even. The output must have the original numbers!

//P: Given an array of numbers, numbers in array could be float values
//R: return a new array with the odd numbers sorted least to greatest and even sorted greatest to least [odd/even]
//E:

function sortingOddEven(arr){
    //create empty even array
    //create empty odd array
    //loop through array to determine odd/even and push to respective arrays
    //sort odd array
    //sort even array
    //concatenate arrays and return
    let even = []
    let odd = []
    array.forEach((num) => {
        Math.floor(num) % 2 ? odd.push(num) : even.push(num)
    })
    odd.sort((a,b) => a-b)
    even.sort((a,b) => b-a)
    return odd.concat(even)
}

console.log(sortingOddEven([11,22,33,44,55,55,90.4,4,78]))//[11,33,55,55,90.4,78,44,22,4]
console.log(sortingOddEven([1,2,3,4,5,6,7,8,9] ))//[1,3,5,7,9,8,6,4,2]
