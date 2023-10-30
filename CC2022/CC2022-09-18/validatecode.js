// Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

// You can assume the input will always be a number.

//given a number
//return a boolean if number starts with 1,2, or 3
//E:

function validate(code) {
    //convert to string and split
    //return first char is == 1 2 or 3
    code = code.toString().split('')[0]
    return code === '1' || code === '2' || code === '3'
}

console.log(validate(123))//true
console.log(validate(17))//true
console.log(validate(51))//false