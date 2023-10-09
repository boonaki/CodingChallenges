// Well met with Fibonacci bigger brother, AKA Tribonacci.
// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(
// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

//given an array of integers (signature) and a number (n). Sig will always contain 3 numbers and be valid. N may be less than 3 but never negative
//return the tribonacci sequence as an array of n length

function tribonacci(sig, n) {
   //check if n is less than 3, return if so
   //define count as 2
   //while loop while sig length is less than n
   //sum previous 3 and push to sig
   //inc count
   //return sig
   if (n < 3) {
      if (n === 0) {
         return []
      } else if (n === 1) {
         return [sig[0]]
      } else if (n === 2) {
         return [sig[0], sig[1]]
      }
   }
   let count = 2;
   while (sig.length < n) {
      let sum = sig[count] + sig[count - 1] + sig[count - 2];
      sig.push(sum);
      count++
   }
   return sig
}

console.log(tribonacci([1, 1, 1], 10))//[1,1,1,3,5,9,17,31,57,105]
console.log(tribonacci([0, 0, 1], 10))//[0,0,1,1,2,4,7,13,24,44]