// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
    return str.split('').map((letter) => letter+=letter).join('')
}

console.log(doubleChar('abcd')) //should output aabbccdd
console.log(doubleChar('hello')) //should output hheelllloo
console.log(doubleChar('1337')) //should output 11333377
  