//Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin){
    let num = 0
    bin = bin.split('').reverse('')
    bin.forEach((binNum, idx) => {
        binNum === "1" ? console.log(num += 2 ** idx) : num += 0
    })
    return num
  }

console.log(binToDec('1')) //should output 1
console.log(binToDec('0')) //should output 0
console.log(binToDec('1001001')) //should output 73
console.log(binToDec('1111000011100000011100')) //should output 3946524
console.log(binToDec('10000110100001111101111')) //should output 4408303
console.log(binToDec('1011100010000001011000')) //should output 3022936