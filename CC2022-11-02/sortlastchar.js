// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

//given a string of words, sentence structure, can be only spaces
//return an array with the words sorted by the position of the last characters

function sortLast(str){
    //split string by spaces
    //sort by grabbing last character in elem and converting to charcode
    //return array
    return str.split(' ').sort((a,b) => b !== '' ? a[a.length-1].charCodeAt(0) - b[b.length-1].charCodeAt(0) : a-b)
}

console.log(sortLast('man i need to take a taxi up to ubud'))//["a", "need", "ubud", "i", "taxi", "man", "to", "up"]
console.log(sortLast('    '))//['', '', '', '']