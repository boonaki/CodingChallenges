// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

//     the second and the last letter is switched (e.g. Hello becomes Holle)
//     the first letter is replaced by its character code (e.g. H becomes 72)

//P: given a string, never empty
//R: return the string, but decrypted (where first character is unicode and second + last characters are switched)
//E:

function decipherThis(str) {
    //split sentence into words
    //split numbers and letters into different arrays
    //convert numbers into character fromcharcode
    //switch first and last characters of letters array
    //join converted number and letters array and return
    str = str.split(' ')
    str = str.map((word) => {
        word = word.split('')
        let nums = []
        let letters = []
        word.forEach((letter, idx) => {
            let secondChar = ""
            if (letter == +letter) {
                nums.push(letter)
            } else {
                letters.push(letter)
            }
        })

        letters = letters.map((elem, idx, self) => {
            let second = self[0]
            if (idx === 0) {
                elem = self[self.length - 1]
                return elem
            } else if (idx === self.length - 1) {
                elem = second
                return elem
            } else {
                return elem
            }
        })
        let firstChar = String.fromCharCode(nums.join(''))
        word = firstChar + letters.join('')
        return word
    })
    return str.join(' ')
}

console.log(decipherThis("72olle"))//Hello
console.log(decipherThis("103doo"))//good
console.log(decipherThis("104olle 119drlo"))//hello world