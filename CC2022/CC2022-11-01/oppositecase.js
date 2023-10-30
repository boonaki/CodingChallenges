// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

//given a string, always valid string, never empty
//return a string with the cases switch and words reversed

function opposite(str){
    //split str by spaces and reverse
    //map, checking if char is uppercase, conver to lowercase if so, else convert to uppercase
    let reversed = str.split(' ').reverse().join(' ')
    return reversed.split('').map(e => e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join('')
}

console.log(opposite('Example Input'))//'iNPUT eXAMPLE'
console.log(opposite('boonakI'))//'BOONAKi'