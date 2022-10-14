// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

//given an array of integers, always whole and positive
//return the average of the array as a rounded integer

function getAverage(arr){
    //reduce the array to grab sum, then divide by array length, and floor given value. return after
    return Math.floor(arr.reduce((a,c) => a+c) / arr.length)
}

console.log(getAverage([2,2,2,2]))//2
console.log(getAverage([1,2,3,4,5,]));//3
console.log(getAverage([1,1,1,1,1,1,1,2]))//1
