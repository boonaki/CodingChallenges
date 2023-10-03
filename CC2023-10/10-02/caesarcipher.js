// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// given a string, always valid, never empty
// return the string encoded, where each letter becomes the letter 13 characters after it 

function rot13(msg) {
   //split msg into array
   //run map
   //check if current is a letter or not
   //convert to ascii
   //add 13 to number
   //check if current is lowercase
   //check if number is greater than 122
   //if so, subtract 122 and store difference in variable
   //convert currentAscii to 96 plus difference
   //check if current is uppercase
   //check if number if greater than 90
   //if so, subtract 90 and store difference in variable
   //convert currentAscii to 64 plus difference
   //convert ascii to letter
   //return joined array
   msg = msg.split('').map((e) => {
      if (e.toLowerCase() != e.toUpperCase()) {
         let current = e.charCodeAt(0) + 13;
         if (e.toLowerCase() === e) {
            if (current > 122) {
               let diff = current - 122;
               current = 96 + diff;
            }
         } else {
            if (current > 90) {
               let diff = current - 90;
               current = 64 + diff;
            }
         }
         return String.fromCharCode(current);
      } else {
         return e
      }
   })
   return msg.join('')
}

console.log(rot13("test"))//grfg
console.log(rot13("Test"))//Grfg