/* 
 Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length.  
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

//given an array and a number, always valid and number will never be greater than the length of the array
//return the array, with the array elements split into different arrays with the length of size

function chunkArray(array, size) {
    //define empty array
    //loop through array length, add size to index at every loop
    //define temp array
    //slice array from i to i+size and push sub array into return array
    //return array
    let arr = []
    for(let i = 0; i < array.length; i+=size){
        let temp = array.slice(i, i+size)
        arr.push(temp)
    }
    return arr
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5))//[[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]