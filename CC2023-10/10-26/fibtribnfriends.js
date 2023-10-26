// If you have completed the Tribonacci sequence kata, you would know by now that mister Fibonacci has at least a bigger brother. If not, give it a quick look to get how things work.

// Well, time to expand the family a little more: think of a Quadribonacci starting with a signature of 4 elements and each following element is the sum of the 4 previous, a Pentabonacci (well Cinquebonacci would probably sound a bit more italian, but it would also sound really awful) with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.

// Well, guess what? You have to build a Xbonacci function that takes a signature of X elements - and remember each next element is the sum of the last X elements - and returns the first n elements of the so seeded sequence.

//given an array of integers of any length, and given an integer, always valid and integers will always be whole
//return an array of n length that represents the xbonacci

function xbonacci(sig, n) {
   //store initial length of sig in var
   //check length is 0 or greater than n
   //init count as 0
   //loop while length of sig is less than n
   //init variable to push as 0
   //loop for inital length
   //grab the element in sig at count + i
   //add to variable to push
   //push variable to sig
   //inc count
   //return sig
   let length = sig.length;
   if (n === 0) {
      return []
   }
   if (length > n) {
      return sig.slice(0, n);
   }
   let count = 0;
   while (sig.length < n) {
      let pushVar = 0;
      for (let i = 0; i < length; i++) {
         pushVar += sig[count + i];
      }
      sig.push(pushVar);
      count++
   }
   return sig
}

console.log(xbonacci([0, 1], 10))//[0,1,1,2,3,5,8,13,21,34]
console.log(xbonacci([1, 1], 10))//[1,1,2,3,5,8,13,21,34,55]
console.log(xbonacci([0, 0, 0, 0, 1], 10))//[0,0,0,0,1,1,2,4,8,16]
