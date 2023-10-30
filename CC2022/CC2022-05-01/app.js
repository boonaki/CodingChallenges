//Given an integral number, determine if it's a square number:

//In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

//The tests will always use some integral number, so don't worry about that in dynamic typed languages.

let isSquare = function(n){
  return Math.floor(Math.sqrt(n)) * Math.floor(Math.sqrt(n)) === n
}

console.log(isSquare(2)) //should output true
console.log(isSquare(4)) //should output true
console.log(isSquare(9)) //should output true
console.log(isSquare(3)) //should output false
console.log(isSquare(26)) //should output false
console.log(isSquare(10)) //should output false
