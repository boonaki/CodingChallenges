// In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

// The result should be a string of numbers, separated by comma and space.

//given 3 integers (the starting number, increment and length)
//return a string with the values being each point of increment, should be as long as given length and comma-separated

function arithmeticProgression(start, inc, n){
   //define array to add to, init with start
   //loop for n -1
   //redefine start as start + inc
   //push start to array
   //return joined array
   let arr = [start];
   for(let i = 0; i < n-1; i++){
      start = start + inc;
      arr.push(start);
   }
   return arr.join(', ')
}

console.log(arithmeticProgression(1,2,5))//"1, 3, 5, 7, 9"
console.log(arithmeticProgression(1,0,5))//"1, 1, 1, 1, 1"