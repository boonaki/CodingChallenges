// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.
// Here is a list of functions, we need:
//     Math.round()
//     Math.ceil()
//     Math.floor()

Math.round = function (number) {
   //convert to string and split into array
   //check if second element is greater/equal to 0.5, where if so return first element + 1
   //if not return first element as number
   let n = String(number).split(".");
   if (+`0.${n[1]}` >= 0.5) {
      return +n[0] + 1;
   } else {
      return +n[0];
   }
};

Math.ceil = function (number) {
   //convert to string and split into array
   //check if second element exists, where if so return first element + 1
   //if not return first element
   let n = String(number).split(".");
   if (n[1]) {
      return +n[0] + 1;
   } else {
      return +n[0];
   }
};

Math.floor = function (number) {
   //convert to string, split and store only first element
   //convert to number and return
   let n = String(number).split(".")[0];
   return +n;
};