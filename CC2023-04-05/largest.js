// Write a program that outputs the top n elements from a list.

//given a number and an array of numbers
//return an array consisting of the biggest elements from the given array, with an array length of n

function largest(n, arr){
    //sort from greatest to least and return slice from 0 to n
    return arr.sort((a,b) => b-a).slice(0, n).reverse()
}

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [9,10])
console.log(largest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [])
console.log(largest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5]), [5,5,5])