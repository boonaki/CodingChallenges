// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".
// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.
// Upper or lower case letter does not matter -- "eNglisH" is also correct.
// Return value as boolean values, true for the string to contains "English", false for it does not.

//given a string containing valid ascii characters
//return a boolean indicating whether or not the string contains the sub-string "English"

function findEn(str){
   //lowercase and return includes check
   return str.toLowerCase().includes("english")
}

console.log(findEn("english"))//true
console.log(findEn("enlgish"))//false