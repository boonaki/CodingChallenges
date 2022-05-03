//Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

function powersOfTwo(n){
    let arr = []
    for(let i = 0; i <= n; i++){
      arr.push(2**i)
    }
    return arr
}

console.log(powersOfTwo(0)) //should output [ 1 ]
console.log(powersOfTwo(1)) //should output [ 1, 2 ]
console.log(powersOfTwo(4)) //should output [ 1, 2, 4, 8, 16 ]