// Your job is to figure out the index of which vowel is missing from a given string:

//given a string, never empty always valid string where every sentence given contains all vowels but one. no capitals
//return a number representing the index of the vowel missing from the given string

function absentVowels(str) {
    //define vowels array
    //loop through vowels array, check if is not included in split string
    //if not then return the index
    let vowels = ['a', 'e', 'i', 'o', 'u']
    str = str.split('')
    for (let i = 0; i < vowels.length; i++) {
        if (!str.includes(vowels[i])) {
            return i
        }
    }
}

console.log(absentVowels('"John Doe hs seven red pples under his bsket"'), 0)
console.log(absentVowels("Bb Smith sent us six neatly arranged range bicycles"), 3)