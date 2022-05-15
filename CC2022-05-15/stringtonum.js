//We need a function that can transform a string into a number.
//P: Takes in string, all inputs will be string, and will be valid interpretations of numbers (below 0, 0 and above 0)
//R: A number value
//E: 

function stringToNum(str){
    //take string and return string with a plus, which converts number string to number
    return +str
}

console.log(stringToNum('1994')) //1994
console.log(stringToNum('0')) //0
console.log(stringToNum('-1')) //-1
