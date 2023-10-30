// Complete the method which accepts an array of integers, and returns one of the following:

//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
//     "yes, descending" - if the numbers in the array are sorted in a descending order
//     "no" - otherwise


//P: given an array of integers, always one correct answer an array will always be valid
//return a string that describes how the array is sorted, and if it isnt sorted simply returning 'no'
//E:

function isSortedAndHow(array) {
    //create copy of array sorted by least to greatest
    //create copy of array sorted by greatest to least
    //stringify both arrays and check if original is equal to copy ascending and return 'yes, ascending'
    //stringify both arrays and check if original is equal to copy descending and return 'yes, descending'
    //else return no
    let copyAsc = [...array].sort((a, b) => a - b)
    let copyDes = [...array].sort((a, b) => b - a)
    if (JSON.stringify(array) === JSON.stringify(copyAsc)) {
        return 'yes, ascending'
    } else if (JSON.stringify(array) === JSON.stringify(copyDes)) {
        return 'yes, descending'
    } else {
        return 'no'
    }
}

console.log(isSortedAndHow([1, 2]))//'yes, ascending'
console.log(isSortedAndHow([12, 10, 9, -2]))//'yes, descending'
console.log(isSortedAndHow([3, 1, 2]))//'no'
