// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//P: given a valid string
//R: return the string but with the first and last characters removed
//E:

function removeChars(str){
    //split string into array
    //slice first and last positions in array
    //return joined array
    return str.split('').slice(1,-1).join('')
}

console.log(removeChars('eloquent'))//'loquen'
console.log(removeChars('country'))//'ountr'
