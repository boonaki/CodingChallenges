//given a string, always valid string, never empty
//return a new string with each character seperated by a space

function spacify(str) {
    //split by character
    //return by joining with space
    return str.split('').join(' ')
}
  
console.log(spacify("hello world"))//"h e l l o   w o r l d"
console.log(spacify("the big brown dog ate some food"))//"t h e   b i g   b r o w n   d o g   a t e   s o m e   f o o d"