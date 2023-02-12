// Write a function that removes every lone 9 that is inbetween 7s.

//given a string of numbers, always valid
//return the string with the 9's that are sandwiched between 7's removed

function sevenAteNine(str){
    //loop through string starting at 1
    //check if current is 9
    //check if before and after is equal to 7, if so replace current with ''
    //return string
    str = str.split('')
    for(let i = 1; i < str.length-1; i++){
        if(str[i] === '9'){
            if(str[i-1] === '7' && str[i+1] === '7'){
                str[i] = ''
            }
        }
    }
    return str.join('')
}

console.log(sevenAteNine('797'), '77')
console.log(sevenAteNine('79797'), '777')
console.log(sevenAteNine('165561786121789797'), '16556178612178977')