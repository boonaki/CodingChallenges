/* CHALLENGE
Given an integer, return an integer that is the reverse 
ordering of that which was received. E.g
    reverseInteger(-123) // should return -321
*/

//given a number in type number, can be negative or positive always whole
//return the reverse of that number

function reverseInteger(num) {
    //convert num to string, reverse and parse
    //use math sign method to grab the '-' incase of a negative and multiply by reversed number to determine positive/negative
    let reversed = parseInt(reverseString(num.toString()))
    return reversed * Math.sign(num)
}

function reverseString(str){
    return [...str].reduce((a,c) => c+a)
}

console.log(reverseInteger(123), 321)
console.log(reverseInteger(-123), -321)