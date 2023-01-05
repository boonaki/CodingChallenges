/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

//given a string of text, can be empty
//return a single character that is repeated the most in the given string

function maxRecurring(text){
    //define empty obj
    //init variables to store max char count and character
    //loop through text, checking if character is in obj, if so then increment and if not set to 1
    //loop through all values in obj
    //check if current value is greater than the max
    //if so then set max char to current char and set max value to current value
    //return maxchar
    let obj = {}
    let maxCharValue = 0
    let maxChar = ''
    for (let char of text) {
        if (obj[char]) {
            obj[char]++
        } else {
            obj[char] = 1
        }
    }
    for (let key in obj) {
        if (obj[key] > maxCharValue) {
            maxCharValue = obj[key]
            maxChar = key
        }
    }
    return maxChar
}

console.log(maxRecurring('aabacd'),'a')
console.log(maxRecurring('boonaki'),'o')