//Write a function that replaces all vowels in a string with an '!'

//P: given a string, never empty, of varying casing
//R: return the string but with all vowels converted into '!'
//E:

function replaceVowels(str){
    //create vowels array
    //split string to array and map each element where if element is equal to any element in vowels array, convert to '!'
    let vowels = ['a','e','i','o','u']
    return str.split('').map((elem) => vowels.includes(elem.toLowerCase()) ? elem = '!' : elem).join('')
}

console.log(replaceVowels('hello'))//'h!ll!'
console.log(replaceVowels('this is a sentence'))//'th!s !s ! s!nt!nc!'
console.log(replaceVowels('ABCDE'))//'!BCD!'