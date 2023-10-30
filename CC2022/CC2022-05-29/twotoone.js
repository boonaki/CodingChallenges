// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//P: Given 2 strings of random sizes from a-z, no numbers or surprising cases
//R: return one sorted string of all letters from both strings with no repeats
//E: 

function longest(s1,s2){
    //combine both strings into one
    //make into array
    //filter out repeated characters
    //sort arr alphabetically
    //return joined array
    let str = s1 + s2
    str = str.split('').filter((letter, idx) => str.indexOf(letter) === idx)
    return str.sort().join('')
}

console.log(longest('abcde', 'efghi'))//'abcdefghi'
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"))//"abcdefklmopqwxy"
