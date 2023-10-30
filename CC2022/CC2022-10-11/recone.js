// 1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.
// Task

// Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

// We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.
// Example:

// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]


//given two numbers m and n, always greater than 1
//return an array of subarrays with each subarray being a pair of numbers.

function list_squared(m,n){
    //init matches array
    //from m to n
    //get divisors and store into array
    //reduce array by multiplying each num by the num and adding to previous, store into sum
    //check if sqrt of sum is a whole number
    //if so then push an array of [ i, sum ]

    //return matches
    let matches = []
    for(let i = m; i <= n; ++i){
        let sum = getDivis(i).reduce((acc,curr) => acc + curr * curr, 0)
        if(Number.isInteger(Math.sqrt(sum))){
            matches.push([i, sum])
        }
    }
    return matches
}

function getDivis(n){
    let divisors = []
    for(let i = 0; i <= n/2; i++){
        if(n % i === 0){
            divisors.push(i)
        }
    }
    return divisors.concat([n])
}

console.log(list_squared(1,250))//[[1,1], [42,2500], [246,84100]]