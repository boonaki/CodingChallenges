// Write function which removes all exclamation marks from a given string.

//P: given a string
//R: return string with "!" removed
//E:

function removeExclamation(string){
    return string.split('').filter((char) => char !== '!').join('')
}

console.log(removeExclamation('Hello World!'))//'Hello World'
console.log(removeExclamation('Hello!!! World!'))//'Hello World'
console.log(removeExclamation('H!e!l!lo! W!or!ld!'))//'Hello World'