// You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

// given an array of elements of type array, number or string, always valid
// return the number of elements within the array

function deepCount(arr) {
   //define count
   //loop for length of array
   //if type of current is an object
   //call deepCount and increment count with returned count
   //else then increment count
   //return count
   let count = 0
   for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'object') {
         count += deepCount(arr[i])
      }
      count++
   }
   return count
}

console.log(deepCount([]))//0
console.log(deepCount([1, 2, 3]))//3
console.log(deepCount(['x', 'y', ['z']]))//4
console.log(deepCount([1, 2, [3, 4, [5]]]))//7