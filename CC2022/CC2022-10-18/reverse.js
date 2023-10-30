// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

//given an array of elements, never empty
//return the array, but reversed (built-in reverse method disabled in this instance)

function reverse(arr){
    //loop through array length /2
    //declare temp to hold current element of current position
    //reassign current position with last - 1 (length - 1 - i)
    //reassign the last as the temp value
    //return arr
    for(let i = 0; i < arr.length/2; i++){
        let temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
    return arr
}

console.log(reverse([1,2,3]))//[3, 2, 1]
console.log(reverse([1,null,14,"two"]))//["two", 14, null, 1]
console.log(reverse(['a','b','c','d']))//['d', 'c', 'b', 'a']