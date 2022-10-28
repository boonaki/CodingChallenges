// WRite a function that converts a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

//given a string, always valid string, of uppercase and lowercase characters
//return a modified string that changes repeated characters to ')' or single characters to '('

function encode(str){
    //create empty object
    //lowercase string, split and loop through each character in the string
    //if current char is in the object, then increment 1, else then add to obj
    //map string and check if current char value in obj is equal to 1, then return '(' else return ')'
    let obj = {}
    str = str.toLowerCase().split('')
    str.forEach((char) => {
        obj[char] ? obj[char]++ : obj[char] = 1
    })
    return str.map((char) => obj[char] === 1 ? char = '(' : ')').join('')
}

console.log(encode('recede'))//'()()()'
console.log(encode('succeed'))//'()()()'