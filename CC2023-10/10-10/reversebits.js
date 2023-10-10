// Write a function that reverses the bits in an integer.
// For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.
// You can assume that the number is not negative.

//given a number, always valid, whole, positive
//return a number as the given number converted to bits, reversed, and converted back

function reverseBits(n){
   //convert to bits, convert to string, split, reverse, join, convert to number, parse and return
   return parseInt(String(n.toString(2)).split("").reverse().join(""), 2);
}

console.log(reverseBits(417))//267
console.log(reverseBits(0))//0
console.log(reverseBits(1024))//1