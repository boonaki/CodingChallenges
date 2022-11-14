//given an array of strings, always valid, never empty, strings of varying case
//return an array of numbers, representing the amount of letters that occupy their position in the alphabet

function abcOccupy(arr) {
    //map array
    //for each word
    //lowercase word
    //run filter within each word for each letter
    //convert character to ASCII code
    //subtract 97 from the character and check if character number is equal to idx
    //convert filtered word to length of word and return mapped array
    return arr.map((word) => {
        word = word.toLowerCase().split('').filter((letter, idx) => letter.charCodeAt(0) - 97 === idx).length
        return word
    })

}

console.log(abcOccupy(["abode", "ABc", "xyzD"]))//[4,3,1]
console.log(abcOccupy(["abide", "ABc", "xyz"]))//[4,3,0]