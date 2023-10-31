// A number m of the form 10x + y is divisible by 7 if and only if x − 2y is divisible by 7. In other words, subtract twice the last digit from the number formed by the remaining digits. Continue to do this until a number known to be divisible by 7 is obtained; you can stop when this number has at most 2 digits because you are supposed to know if a number of at most 2 digits is divisible by 7 or not.
// The original number is divisible by 7 if and only if the last number obtained using this procedure is divisible by 7. 
// Your task is to return to the function seven(m) (m integer >= 0) an array (or a pair, depending on the language) of numbers, the first being the last number m with at most 2 digits obtained by your function (this last m will be divisible or not by 7), the second one being the number of steps to get the result.

// given a number, always valid never negative always whole
// return an array of numbers representing the final number and number of steps

function seven(m){
   //define steps count
   //while loop while string is greater than 2
   //divide m by 10 and round, subtract that value by the product of remainder and 2
   //increment steps
   //return [m, stepsCount]
   let steps = 0
   while(m.toString().length > 2){
      m = Math.floor(m/10) - ((m%10) * 2);
      steps++
   }
   return [m, steps]
}

console.log(seven(1021))//[10,2]
console.log(seven(1603))//[7,2]
console.log(seven(371))//[35,1]