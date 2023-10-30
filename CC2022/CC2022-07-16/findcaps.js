// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

//P: given a string, of only roman characters, no numbers
//R: return the indexes, in an array, of all the capital letters in the string
//E:

function findCapitals(word){
    //create empty array
    //split string
    //for each letter in string
    //check if charcode of letter is greater than 64 or less than/equal to 90
    //push index to array
    //return array
    let arr = []
    word.split('').forEach((letter,idx) => {
        if(letter.charCodeAt(0) > 64 && letter.charCodeAt(0) <= 90){
            arr.push(idx)
        }
    })
    return arr
}

console.log(findCapitals('wEiRd'))//[1,3]
console.log(findCapitals('oCToPUs'))//[1,2,4,5]
