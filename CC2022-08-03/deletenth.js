//Write a function when given a list and a number, create a new list that contains each number of list at most N times, without reordering.

//P: given a array of numbers and a single number, all whole numbers, array never empty
//R: return the array with only the numbers repeated n amount of times ([20,37,20,21],1 => [20,37,21])
//E:

function deleteNth(arr,n){
    //create temp object
    //filter through array
    //set new property of elem and make it equal to elem + 1 or 1 if doesnt exist
    //check if less than or equal to n to filter
    //return filtered array
    let temp = {}
    return arr.filter((elem) => (temp[elem] = temp[elem] + 1||1) <= n)
}

console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3))//[1, 1, 3, 3, 7, 2, 2, 2]
console.log(deleteNth([20,37,20,21], 1))//[20,37,21]
