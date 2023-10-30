// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

//P: given a number representing an ASCII character, no special cases
//R: return the corresponding ASCII character from the given number
//E:

function getChar(num){
    //find character from the char code of the the given number
    //return character
    return String.fromCharCode(num)
}

console.log(getChar(65))//A
console.log(getChar(57))//9
console.log(getChar(58))//: