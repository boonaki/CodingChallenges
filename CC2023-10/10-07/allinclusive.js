// Input:
//     a string strng
//     an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):
//     a boolean true if all rotations of strng are included in arr
//     false otherwise

//given a string and an array of string, both always valid but string and array may be empty
//return a boolean indicating if all rotations of the string are included in the array

function isVariantsIncluded(string, arr) {
   //check if string is === "" if so return true
   //define array to hold all iterations
   //for loop for length of string
   //slice from 0 to current index + 1, store in both in variables
   //combine and push to iterations array
   //for loop for array to check if current is included in array where if not return false
   //else return true
   if (string === "") {
      return true;
   }
   const iterations = [];

   for (let i = 0; i < string.length; i++) {
      let sliced = string.slice(0, i + 1);
      let cut = string.slice(i + 1);
      iterations.push(cut.concat(sliced))
   }
   for (let i = 0; i < iterations.length; i++) {
      if (!arr.includes(iterations[i])) {
         return false
      }
   }
   return true
}

console.log(isVariantsIncluded("", []))//true
console.log(isVariantsIncluded("", ["bsjq", "qbsj"]))//true
console.log(isVariantsIncluded("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]))//true
console.log(isVariantsIncluded("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]))//false
