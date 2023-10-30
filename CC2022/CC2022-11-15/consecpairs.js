//given an array of numbers, unsorted and may be less than 1, also length may be odd
//return a number representing the number of pairs in the array that are consecutive

function consecutivePairs(arr) {
    //if the length is odd, pop last element out
    //declare count variable to 0
    //for loop, incrementing by 2 running for length of array
    //if the difference between the next and current is 1, increment count
    //return count
    if (arr.length % 2) {
        arr.pop()
    }
    let count = 0
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i + 1] - arr[i] === 1 || arr[i] - arr[i + 1] === 1) {
            count++
        }
    }
    return count
}

console.log(consecutivePairs([1, 2, 5, 8, -4, -3, 7, 6, 5]))//3
console.log(consecutivePairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]))//2