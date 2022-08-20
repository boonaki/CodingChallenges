// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

//P: given a string of words, never empty, contains valid strings and will always be lowercase
//R: return a string representing the word in the given string with the highest score
//E:

function highestScore(string) {
    //split string into array of words
    //copy split string into declared variable
    //forEach string in array
    //declare empty max
    //map each letter converting the letter to its ASCII code - 96
    //reduce each word (now converted to numbers) to its sum
    //return the index of the biggest number
    string = string.split(' ')
    let str = string
    let arr = []
    str.forEach((word, w_idx) => {
        word = word.split('').map((letter) => letter.charCodeAt(0) - 96)
        arr.push(word.reduce((a, c) => a + c))
    })
    return string[arr.indexOf(Math.max(...arr))]
}

console.log(highestScore('man i need a train up to abu'))//'train'
console.log(highestScore('what time are we climbing up the volcano'))//'volcano'
console.log(highestScore('take me to japan please'))//'please'