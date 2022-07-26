// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

//P: given a string, lower and upper case, possible spaces
//R: return the string but with only the vowels removed
//E:

function vowelRemove(string){
    //store vowels into array
    //split string and filter those in array
    //join and return
    let vowels = ['a','e','i','o','u']
    return string.split('').filter((letter) => !vowels.includes(letter)).join('')
}

console.log(vowelRemove('hello'))//'hll'
console.log(vowelRemove('goodbye'))//'gdby'
console.log(vowelRemove('HELLO'))//'HELLOW'