//Create a function that will encrypt a given string by following these rules
//     - The first letter must be converted to its ASCII code.
//     - The second letter must be switched with the last letter

//P: Given a string, containing space seperated words
//R: return an encrypted string with the first letter converted to ascII char code, and second/last characters switched
//E:

function encryptThis(string) {
    //split string by spaces
    //for each word, split word and map array, convert first char to asc2 and switch first and last
    //return joined string
    text = text.split(' ').map((word) => {
        word = word.split('').map((letter, idx, self) => {
            let placeholder = self[1]
            if (idx === 0) {
                letter = letter.charCodeAt(0)
                return letter
            } else if (idx === 1) {
                letter = self[word.length - 1]
                return letter
            } else if (idx === word.length - 1) {
                letter = placeholder
                return letter
            } else {
                return letter
            }
        }).join('')
        return word
    })
    return text.join(' ')
}

console.log(encryptThis("Hello"))//72olle
console.log(encryptThis("good"))//103doo
console.log(encryptThis("hello world"))//104olle 119drlo

