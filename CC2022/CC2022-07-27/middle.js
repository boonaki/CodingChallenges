// create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements. The input to the function will be an array of three distinct numbers.

//P: Given an array of floats with a middle number, but will be mixed [-2, -3.2, 1], can be positive or negative
//R: return the index of the middle of the array from smallest to largest
//E:

function middleIndex(arr){
    //sort the array from least to greatest and grab the middle integer
    //return the index of sorted array
    arr.indexOf([...arr].sort((x, y) => x > y)[1])
}

console.log(middleIndex([2,3,1]))//0
console.log(middleIndex([2.1, 3.2, 1.4]))//0
console.log(middleIndex([-5, -10, -14]))//1
console.log(middleIndex([-5.2, -10.6, 14]))//0
