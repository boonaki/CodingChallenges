// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

//given a string of characters, always valid input
//return the string with only the first characters of each word

function firstChars(str){
    return str.split(' ').map(e => e[0]).join('')
}

console.log(firstChars("sees eyes xray yoat"), "sexy")
console.log(firstChars("brown eyes are nice"), "bean")