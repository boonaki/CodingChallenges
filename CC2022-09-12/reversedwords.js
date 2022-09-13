//Write a function so that it reverses all of the words within the string passed in.

//given a string, never empty
//return the words reversed, but not indivually reversed

function reverseWords(str){
    //split string by spaces
    //reverse array and join by spaces and return
    return str.split(' ').reverse().join(' ')
}

console.log(reverseWords('Coding is fun.'))//"fun. is Coding"