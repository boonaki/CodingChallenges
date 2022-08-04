// Write a function when given a string of words, return the length of the shortest word(s).

//P: given a string of words, never empty string
//R: return a value representing the length of the shortest word
//E:

function findShortest(string){
    //split array
    //convert each word to its length
    //return math.min of string
    string = string.split(' ').map((word) => word.length)
    return Math.min(...string)
}

console.log(findShortest("bitcoin take over the world maybe who knows perhaps"))//3
console.log(findShortest("turns out random test cases are easier than writing out basic ones"))//3
console.log(findShortest("Let's travel abroad shall we"))//2