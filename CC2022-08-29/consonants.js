// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

//P: given a lowercase string, never empty
//R: return the sum of each consonant (char !== aeiou)
//E:

function consonantSum(str) {
    //store vowels in array
    //map string and convert each vowel to a '-'
    //split string by '-'
    //reduce each string in array to sum and return max value
    let vowels = ['a', 'e', 'i', 'o', 'u']
    str = str.split('').map((elem) => vowels.includes(elem) ? elem = '-' : elem).join('').split('-')
    str = str.map((string) => {
        string = string.split('').reduce((acc, curr) => acc + (curr.charCodeAt(0) - 96), 0)
        return string
    })
    return Math.max(...str)
}

console.log(consonantSum('zodiac'))//26
console.log(consonantSum('boonaki'))//14
console.log(consonantSum('friends'))//37