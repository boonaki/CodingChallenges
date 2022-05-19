//Complete the function which converts hex number (given as a string) to a decimal number.

//P: given a hex number as a string
//R: return a decimal number
//E: 

function hexToDec(hexString){
    return parseInt(hexString, 16)
}

console.log(hexToDec("1"))//1
console.log(hexToDec("a"))//10
console.log(hexToDec("10"))//16