// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

// Given a number, Find if it is Disarium or not . 

//given a number, alway valid & whole
//return a string stating if the given number is a disarium number

function isDisarium(n) {
    //convert num to string and store in new variable
    //split string and map, converting each to the power to their index
    let num = n.toString().split('').map((e, i) => e ** (i + 1)).reduce((a, c) => a + c)
    if (num === n) return "Disarium !!"
    return "Not !!"
}

console.log(isDisarium(89), 'Disarium !!')
console.log(isDisarium(564), 'Not !!')
console.log(isDisarium(1024), 'Not !!')