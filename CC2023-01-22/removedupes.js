// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

//given an array of integers, unsorted always whole
//return the array, with all the dupes removed except for the right most element

function removeDupes(arr){
    //reverse array
    //create set and store into array
    //reverse and return
    arr.reverse()
    arr = [...new Set(arr)]
    return arr.reverse()
}

console.log(removeDupes([3,4,4,3,6,3]), [4,6,3])
console.log(removeDupes([1,2,1,2,1,2,3]), [1,2,3])