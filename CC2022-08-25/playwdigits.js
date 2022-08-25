// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

//     we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.


//P: given two positive integers, one representing the starting value and the other representing the start of the power
//R: return the integer representing the number that is equal to the digits squared and summed, if it doesnt exist then -1
//E:

function digPow(n, p) {
    //convert n to array of digits
    //map array with incrementing power value
    //sum array and divide by starting value
    //return given value, else -1
    let nVal = n.toString().split('')
    let inc = p
    nVal = nVal.map((elem) => {
        elem = elem ** inc
        inc++
        return elem
    }).reduce((acc, curr) => acc + curr)
    nVal = nVal / n
    return nVal === Math.round(nVal) ? nVal : -1
}

console.log(digPow(89, 1))//1
console.log(digPow(92, 1))//-1
console.log(digPow(695, 2))//2
console.log(digPow(46288, 3))//51