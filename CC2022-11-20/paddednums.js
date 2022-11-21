//given a number, always whole, always valid
//return a string, with the passed number value length always equaling 5, where if not is padded with 0's

function padNum(num){
    //convert num to string and find length
    //subtract 5 from length and repeat 0 that number of times
    //concenate and return string
    let zeros = '0'.repeat(5-num.toString().length)+num.toString()
    return `Value is ${zeros}`
}

console.log(padNum(5))//'Value is 00005'