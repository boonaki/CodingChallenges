// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

//     A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
//     The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").


//given a string, with any value and length greater than 0
//return the string with the individual words abbreviated, words with special characters are to be return the same

function abbreviate(str) {
    //split string with '-' then join with space, then split by space
    //run map
    //if length is greater than or equal to 4 and word doesnt include a special character
    //slice first and last letters and store into variables
    //store the sliced length of the middle (1, word length-1) in variable
    //concat first, middle and last then reassign word to abbrev
    //return join array
    str = str.split(' ')
    str = str.map((word) => {
        if (word.length >= 4 && !word.includes('!')) {
            let comma = ''
            if (word.includes('-')) {
                word = word.split('-').map((w) => {
                    let f = w.slice(0, 1)
                    let m = w.slice(1, w.length - 1).length
                    let l = w.slice(w.length - 1)
                    w = f + m + l
                    return w
                }).join('-')
            } else {
                word = word.split('')
                if (word[word.length - 1] === ',') {
                    comma = word.pop()
                }
                let first = word.shift()
                let last = word.pop()
                word = `${first + word.join('').length + last + comma}`
            }
            return word
        } else {
            return word
        }
    }).join(" ")

    return str
}

console.log(abbreviate('elephant-ride are really fun!'))//"e6t-r3s are r4y fun!"
console.log(abbreviate('internationalization'))//"i18n"
console.log(abbreviate('Accessibility'))//"A11y"