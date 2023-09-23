// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying
//     F(n) * F(n+1) = prod.
// Your function productFib takes an integer (prod) and returns an array:
// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
// depending on the language if F(n) * F(n+1) = prod.
// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return
// [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
// F(n) being the smallest one such as F(n) * F(n+1) > prod.

//given a single whole, positive number
//return an array of 3 values, the first 2 being the numbers that multiply to equal the product

function productFib(prod) {
   //define start as 0
   //define increment as 1
   //run loop for while product of start and increment is less than prod
      //redefine increment to start + increment
      //refine n as increment - n
   //return array with [start, increment and boolean check start*inc===prod]
   let start = 0
   let inc = 1
   while(start*inc < prod){
      inc = inc + start;
      start = inc - start
   }
   return [start, inc, start*inc === prod]
}

console.log(productFib(4895))//[55,89, true]
console.log(productFib(5895))//[89, 144, false]