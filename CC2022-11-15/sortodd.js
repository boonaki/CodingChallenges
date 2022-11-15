//given an array of numbers, never empty
//return a new array with the odd numbers sorted and the even numbers remaining where they are

function sortOdd(arr) {
    //filter all odds, sort from least to greatest and store into new variable
    //loop for length of arr
    //check if the number is odd
    //if so, then shift first element out of odds array
    //store into current position
    //return mutated array
    let odds = arr.filter(e => e % 2 !== 0).sort((a, b) => a - b)
    return arr.map(num => {
        if (num % 2) {
            let temp = odds.shift()
            num = temp
        }
        return num
    })
}

console.log(sortOdd([5, 8, 6, 3, 4]))//[3,8,6,5,4]