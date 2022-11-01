// Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

//given a string of alphabetical characters, never empty always lowercase
//return the string with the characters sorted alphabetically

function sortGiftCode(str){
    //split string and run sort method converting each character to char code and sorting from least to greatest
    //return the joined string
    return str.split('').sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0)).join('')
}

console.log(sortGiftCode('abcdef'))//'abcdef'
console.log(sortGiftCode('asdawdasffbx'))//'aaabddffsswx'
console.log(sortGiftCode('xcbfbvsfb'))//'bbbcffsvx'