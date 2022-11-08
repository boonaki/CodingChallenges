// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

//given an array of numbers, always numbers
//return an array with all the duplicates removed

function removeDupes(arr){
    //return a new set, which will remove dupes
    return [...new Set(arr)]
  }
  
  console.log(removeDupes([1,2,2,2,3,4,4]))//[1,2,3,4]
  console.log(removeDupes([17,71,18,17]))//[17,71,18]