// Given a set of numbers, write a function that returns the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

//P: given an array of numbers, always whole, negative / positive
//R: return the same array of numbers but the signs of each number flipping
//E:

function inverses(arr){
    //map through each element, dividing each element by 1
    return arr.map((elem) => elem / -1)
}

console.log(inverses([1,2,3,4,5]))//[-1,-2,-3,-4,-5]
console.log(inverses([1,2,-3,4,-5]))//[-1,-2,3,-4,5]
console.log(inverses([0]))//[-0]