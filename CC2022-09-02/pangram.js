// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//P: given a string of words
//R: determine if string is a pangram or not (contains every single letter of the alphabet atleast once)
//E:

function pangram(string) {
    //create object of letters
    //lowercase string and split by spaces
    //foreach letter in each word, increment property value of letter in object
    //loop through object to find if a property value is 0
    //if none are 0 return true
    let obj = {
        'a': 0,
        'b': 0,
        'c': 0,
        'd': 0,
        'e': 0,
        'f': 0,
        'g': 0,
        'h': 0,
        'i': 0,
        'j': 0,
        'k': 0,
        'l': 0,
        'm': 0,
        'n': 0,
        'o': 0,
        'p': 0,
        'q': 0,
        'r': 0,
        's': 0,
        't': 0,
        'u': 0,
        'v': 0,
        'w': 0,
        'x': 0,
        'y': 0,
        'z': 0
    }
    string = string.toLowerCase().split(' ')
    string.forEach((word) => {
        word.split('').forEach((letter) => {
            if (obj[letter] !== undefined) {
                obj[letter]++
            }
        })
    })
    for (key in obj) {
        if (obj[key] < 1) {
            return false
        }
    }
    return true
}

console.log(pangram("The quick brown fox jumps over the lazy dog."))//true
console.log(pangram("This is not a pangram."))//false