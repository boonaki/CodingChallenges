//Write a function that takes in a array of numbers, and returns that array with the odd numbers sorted from least to greatest, while leaving the even numbers at their original position

//P: given an array of numbers, whole, can be empty
//R: return the array but with odd nums sorted and even nums in their original place
//E:

function sortArray(arr){
    //declare new array with sorted odds
    //map arr and replace each odd element with the first in the array
    //return array
    let odds = array.filter((elem) => elem % 2 !== 0).sort((a,b) => a-b)
    return array.map((elem) => elem % 2 !== 0 ? elem = odds.shift() : elem)
}

console.log(sortArray([5, 3, 2, 8, 1, 4]))//[1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0]))//[1, 3, 5, 8, 0]
console.log(sortArray([]))//[]