// Given an array/list [] of integers , Find the product of the n maximal numbers.

//given an array of numbers, always of size greater than 3 and has a mixture of negatives, positives and repititions
//return the product of the biggest numbers in the array of the given size

function maxProduct(nums, size){
    //sort from greatest to least (b-a)
    //slice from 0 to size, and reduce muliplying each by the previous
    //return product
    return nums.sort((a,b) => b-a).slice(0,size).reduce((a,c) => a*c,1)
}

console.log(maxProduct([4,3,5],2))//20
console.log(maxProduct([10,8,7,9],3))//720