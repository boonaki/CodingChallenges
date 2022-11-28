// Implement a function which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

//given 2 numbers, representing the length of the return array and the number to find multiples of
//return an array of the first m multiples of the given number

function multiples(m, num) {
    //define empty array
    //define 0 var
    //while array length is not equal to m
    //add num to var, then push to array
    //return array
    let arr = []
    let product = 0
    while (arr.length !== m) {
        product += num
        arr.push(product)
    }
    return arr
}

console.log(multiples(3, 5))//[5,10,15]