// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

//P: given an array of whole real numbers
//R: return an 'even' or 'odd' string if the sum is even or odd
//E:

function oddOrEven(arr){
    //reduce array to sum
    //if sum % 2 === 0(falsy) then return 'even' else return 'odd'
    arr = arr.reduce((acc,curr) => acc + curr, 0)
    return arr % 2 ? 'odd' : 'even'
}

console.log(oddOrEven([0,1,5]))//even
console.log(oddOrEven([0,1,5,1]))//odd
console.log(oddOrEven([1,1,2]))//even