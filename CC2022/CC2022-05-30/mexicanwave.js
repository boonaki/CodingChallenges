// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

// Rules

//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat

// Example

// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

//P: given a string, could multiple words, always be lowercase
//R: return wave inside string, as an array
//E:

function wave(str){
    //remove whitespace from str with split and join
    //loop through length of str
    //convert character based on index to uppercase
    //push to array
    //return completed arr
    str = str.split('')
    let arr = []
    for(let i = 0; i < str.length; i++){
        if(str[i] !== ' '){
            str[i] = str[i].toUpperCase()
            arr.push(str.join(''))
            str[i] = str[i].toLowerCase()
        }
    }
    return arr
}

console.log(wave('hello'))//['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']