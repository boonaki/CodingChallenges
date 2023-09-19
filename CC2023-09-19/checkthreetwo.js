// Given an array with exactly 5 strings "a", "b" or "c", check if the array contains three and two of the same values.



//given an array of 5 strings, each string being 1 single character either 'a', 'b' or 'c'
//return a boolean indicating if the given array contains a group of 3 of equal strings and a group of 2 of equal strings

function checkThreeTwo(arr) {
   //declare empty obj for hash map
   //sort array
   //for loop
   //check if item exists in array, where if it does then increment value
   //if not then add into hash
   //convert hash to array of keys
   //check if length is greater than 2, if so return false
   //if not then check if values product to 6
   let hash = {};
   arr.sort();
   for (let i = 0; i < arr.length; i++) {
      if (hash[arr[i]]) {
         hash[arr[i]]++;
      } else {
         hash[arr[i]] = 1;
      }
   }
   const Keys = Object.keys(hash);
   if (Keys.length !== 2) {
      return false;
   }
   return hash[Keys[0]] * hash[Keys[1]] === 6;
}

console.log(checkThreeTwo(['a', 'b', 'a', 'b', 'a']))//true --> ['a': 3, 'b': 2]
console.log(checkThreeTwo(["a", "c", "a", "c", "b"]))//false --> ['a': 2, 'b': 1, 'c': 2]