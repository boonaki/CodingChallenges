// Your task is to write a function that takes a string and return a new string with all vowels removed. (Not including 'y')


//P: given sentence string, can contain special characters
//R: return the string with same spacing, but without vowels
//E:

function disemvowel(str){
    //create array of upper and lowercase vowels
    //split string and filter if string includes any character from vowels array
    //return joined string
    let arr = ['a','e','i','o','u','A','E','I','O','U']
    str = str.split('').filter((char) => !arr.includes(char))
    return str.join('')
}

console.log(disemvowel(''))