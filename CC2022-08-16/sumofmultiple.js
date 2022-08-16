//Write a function where given a number, n, upto and including, return the sum of all multiples of 3 and 5

//P: given a single number value, always whole
//R: return the sum of the numbers that are multiples of 3 or 5
//E:

function findSum(n) {
    //init empty array
    //create loop from 1 to n
    //in loop, check if multiple of 3 or 5 and if it is add to empty array
    //return reduced array
    let arr = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            arr.push(i)
        }
    }
    return arr.reduce((acc, curr) => acc + curr)
}

console.log(findSum(5))//8
console.log(findSum(10))//33