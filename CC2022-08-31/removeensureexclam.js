// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

//P: given a string
//R: remove all '!' from string and replace last with bang !
//E:

function remove(str){
    //split string
    //filter string of exclamation
    //add exclam to end and return
    return str.split('').filter((char) => char !== '!').join('') + '!'
}

console.log(remove("H!ello"))//Hello!
console.log(remove("Hello"))//Hello!