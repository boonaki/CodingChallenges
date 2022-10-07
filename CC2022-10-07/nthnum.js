// Write a function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).
// Note

//     If num is negative, ignore its sign and treat it as a positive value
//     If nth is not positive, return -1
//     Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0

//given two integer values, n and nth, could be negative values but always whole
//return a single digit representing the nth value in the given n, counting from the left. if nth is negative return -1, if nth is greater than n length then return 0

function findDigit(num, nth) {
    // check if nth is less than 1, then return -1
    //convert n to string, filter out any negatives, reverse and join
    //if nlength is less than nth, then return 0
    //else return the digit at nth-1
    if (nth < 1) {
        return -1
    }
    num = num.toString().split('').filter((char) => char !== '-').reverse().join('')
    if (num.length < nth) {
        return 0
    } else {
        return +num[nth - 1]
    }
}

console.log(findDigit(8080, 2))//8
console.log(findDigit(8080, -2))//-1
console.log(findDigit(8080, 6))//0
