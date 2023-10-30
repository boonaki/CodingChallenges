//create an encoding function that takes all the lowercase vowels to numbers a-u with 1-5

//given a string
//return a string with the vowels of the given string turned into numbers

function encode(str) {
    //create object with key value pairs for vowels/numbers
    //split and map string checking current letter is a key and if so converting the letter to the value
    //return joined array
    let vowels = { 'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5 }
    return str.split('').map(e => vowels[e] ? e = vowels[e] : e).join('')
}

console.log(encode('hello'))//'h2ll4'
console.log(encode('How are you today?'))//'H4w 1r2 y45 t4d1y?'

//given a string
//return a string with the numbers converted into the vowels a-u::1-5

function decode(str) {
    //repeat same from encode but with numbers as keys and vowels as values
    let numbers = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' }
    return str.split('').map(e => numbers[e] ? e = numbers[e] : e).join('')
}

console.log(decode('h2ll4'))//hello