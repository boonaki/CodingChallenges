//Write a function where each lowercase letter in a string of text becomes uppercase and uppercase becomes lowercase

//given a string of text, could include numbers
//return a string with the cases swapped

function altCase(str){
    //split string
    //map check if string is lowercase, if it is then uppercase and do same for opposite
    //join and return
    return str.split('').map((elem) => elem === elem.toUpperCase() ? elem.toLowerCase() : elem.toUpperCase()).join('')  
}

console.log(altCase("Hello World"))//hELLO wORLD
console.log(altCase("hello WORLD"))//HELLO world
console.log(altCase("This is a StRiNg"))//tHIS IS A sTrInG
