// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

//P: given a string value
//R: return a boolean if the given string is a valid number
//E:

function isDigit(str){
    return parseFloat(str) == str
}

console.log(isDigit('3-4'))//false
console.log(isDigit('-3.14'))//true
console.log(isDigit('3   5'))//false