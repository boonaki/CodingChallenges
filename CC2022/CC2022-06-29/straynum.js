// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

//P: given an array of integers, all values are same except one number
//R: return the outlying integer
//E:

function strayNum(numbers){
    //sort array from largest to smallest
    //check if first number is equal to last
    //return first or last number in array
    numbers.sort((a,b) => a-b)
    if(numbers[0] !== numbers[1]){
        return numbers[0]
    }else{
        return numbers[numbers.length-1]
    }
}

console.log(strayNum([17, 17, 3, 17, 17, 17, 17]))//3
console.log(strayNum([1, 1, 2] ))//2