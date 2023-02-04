// The aim of this challenge is to split a given string into different strings of equal size (note size of strings is passed to the method)

//given a string of characters and a number representing the length of the substrings the word must be split into
//return the string with the word split by n

function splitInParts(str, subLength) {
    //define return string variable
    //loop for length of string
    //increment i by sublength at every loop
    //substring string from i to i + sublength
    //store cut string into defined variable 
    //return trimmed string variable
    let s = ""
    for (let i = 0; i < str.length; i += subLength) {
        s += str.substring(i, i + subLength) + ' '
    }
    return s.trim()
}

console.log(splitInParts('HelloMoto', 1), 'H e l l o M o t o')