//Write a function that when provided with a letter, return its position in the alphabet.

//P: given a single character, a-z and lowercase in type string
//return a string contating the position that the character sits in the alphabet
//E:

function position(letter){
    //find character code of letter and subtract 96
    return `Position of alphabet: ${letter.charCodeAt(0) - 96}`
}

console.log(position('a'))//"Position of alphabet: 1"
console.log(position('z'))//"Position of alphabet: 26"
console.log(position('h'))//"Position of alphabet: 8"