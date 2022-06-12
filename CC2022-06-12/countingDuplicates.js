// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

//P: Given a string of letters or digits
//R: return the number of characters/digits that are repeated
//E:

function duplicateCount(text) {
    //create empty object
    //lowercase string and loop through each character in string
    //if character doesnt exist inside of object, add new key with value of 1
    //if character already exists in object, increment value of key
    //loop through object and increase variable count for every key with a value higher than 1
    let obj = {}
    let count = 0
    text = text.toLowerCase().split('')
    text.forEach((char) => {
        if (!obj[char]) {
            obj[char] = 1
        } else {
            obj[char] += 1
        }
    })
    for (char in obj) {
        if (obj[char] > 1) {
            count++
        }
    }
    return count
}

console.log(duplicateCount('abcde'))//0
console.log(duplicateCount('invisible'))//1