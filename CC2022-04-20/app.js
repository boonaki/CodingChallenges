//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
    //split the string into an array
    //take indiviudal words and reverse lettering position
    //return joined modified array of words
    return str.split(" ").reverse().join(" ").split("").reverse().join("")
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))//'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(reverseWords('apple'))//'elppa'
console.log(reverseWords('a b c d'))//'a b c d'

