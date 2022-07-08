// write a function that removs 1 exclamation mark from the end of a string.

//P: given a string, no special cases
//R: return the exact string but with an exclamation mark removed from the end, if there is an exclamation
//E:

function remove(string){
    //check if string ends with '!'
    //return sliced string if ends with exclam
    //return normal string if not
    return string.endsWith('!') ? string.split('').slice(0,-1).join('') : string
}

console.log(remove('!hi'))//'!hi'
console.log(remove('hi!'))//'hi'

