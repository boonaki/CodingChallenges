// Write a function to find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1.

//P: given an array of numbers and a number value, all whole numbers
//R: return the value at position n but to the n power
//E:

function indexPower(array, n){
    //check if n is greater than array length
    //if it is, return -1
    //else return n value to the n power
    return n > array.length - 1 ? -1 : array[n]**n
}

console.log(indexPower([1,2,3,4], 2))//9
console.log(indexPower([1,3,10,100], 3))//1000000
console.log(indexPower([1,2], 3))//-1