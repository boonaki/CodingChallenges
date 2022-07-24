//write a function that removes all zeroes from a number

//P: given a whole number value, positive or negative
//R: remove all the zeroes in the number
//E:

function removeZeroes(num){
    //convert num to string
    //split string, filter nums not equal to 0
    //join, convert to number and return
    n = n.toString().split('')
    let zeroCount = 0
    n.forEach((num) => {
        num === '0' ? zeroCount++ : zeroCount = 0
    })
    n = n.reverse().slice(zeroCount).reverse().join('')
    return +n
}

console.log(removeZeroes(10007))//17
console.log(removeZeroes(202204))//2224