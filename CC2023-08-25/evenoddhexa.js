// takes in a number
// returns a string in binary or hexadecimal based on if the number is even or odd

function NumberToHexOrBi(num){
   //define string to return
   // check if number is even
   //if so convert to binary
   //else
   //convert to hex
   //return converted string
   let retStr;
   if(num % 2 === 0){
      retStr = num.toString(2);
   }else{
      retStr = num.toString(16);
   }
   return retStr;
}

console.log(NumberToHexOrBi(2), "10");
console.log(NumberToHexOrBi(13), "d");
console.log(NumberToHexOrBi(47), "2f");