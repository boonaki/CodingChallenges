// A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

// Ex: 153, where l = 3 ( the number of digits in 153 )
// 13 + 53 + 33 = 153

// Write a function that, given n, returns whether or not n is a Narcissistic Number.

//P: takes in a random value
//R: true if number is narcissistic, false if not
//E:

function narcissistic(num){
    //split num, map num and math.pow each num, then join
    //check if num is equal to above statement
    let check = num.toString()
    return num === check.split('').map((numLetter) => Number(numLetter)**check.length).reduce((a,c) => a + c)
}

console.log(narcissistic(153))//true
console.log(narcissistic(435))//false
