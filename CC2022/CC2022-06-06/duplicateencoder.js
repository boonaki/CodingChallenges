// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

//P: given valid string
//R: return the string but with '(' if the chracter doesnt repeat, and ')' if it does
//E:

function duplicateEncode(word){
    //create empty literal object
    //make word lowercase, split word and loop
    //for each char, if char exists in object, increment value
    //if char does not exist, create property with value of 1
    //return mapped string, if characters[char] > 1, replace character with ), else replace with (
    let characters = {}
    word = word.toLowerCase().split('')
    word.forEach((char) => {
      characters[char] ? characters[char] += 1 : characters[char] = 1;
    })
    let complete = []
    word = word.map((char) => {
        if(characters[char] === 1){
            complete.push('(')
        }else{
            complete.push(')')
        }
    })
    return complete.join('')
}
console.log(duplicateEncode('din'))//'((('
console.log(duplicateEncode('encode'))//')(((()'
