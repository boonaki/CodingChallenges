// Write a function that checks whether or not or not the numbers in an array are below or equal to a given limit value

//P: given an array of numbers and a limit value
//R: return a true or false
//E:

function smallEnough(array, limit){
    //filter array if numbers are less than greater than limit into array
    //return result of checking whether the size of the array is the same as the new array
    let limitCheck = array.filter((num) => num <= limit)
    return array.length === limitCheck.length
}

console.log(smallEnough([66, 101], 200))//true
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))//false
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107))//true