// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, Index 0 will be considered even. Stri

//P: given a string of letters, no spaces, all lowercase
//R: return 2 strings in an array, one with all the even indexes capitalized and one with all odd indexes capitalized
//E:

function altCapitals(string){
    //split string
    //map string into new variable of string type
    //in map, only capitalize all letters with index modulo 2 === 0
    //map string into another variable and repeat for opposite
    //join into array and return
    string = string.split('')
    const odd = string.map((letter, i) => i % 2 !== 0 ? letter.toUpperCase() : letter).join("");
    const even = string.map((letter, i) => i % 2 === 0 ? letter.toUpperCase() : letter).join("");
    return [even, odd];
}

console.log(altCapitals('mocking'))//['MoCkInG','mOcKiNg']
console.log(altCapitals('moonpie'))//['MoOnPiE','mOoNpIe]