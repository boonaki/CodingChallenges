//given a strin gof digits, (0-9)
//return a string where each digit is repeated a number of times equals to its value

function explode(str){
    //split string, map and repeat string the current number of times
    //join and return
    return str.split('').map(e => e.repeat(+e)).join('')
}

console.log(explode("312"))//'333122'
console.log(explode("501"))//'555551'