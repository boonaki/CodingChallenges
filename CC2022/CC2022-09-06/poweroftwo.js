//Write a function that checks if a given number is a power of two
// "a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent."

//P: given a single integer, never negative and alawys whole
//R: return a boolean if 2**exponent === given number
//E:

function isPowerOfTwo(num){
    //2^x = num
    //if num === 1 return true || num === 0 return false
    //find log of both sides and divide right side by left side and store into variable
        //log of num / log of 2
    //round exponent and check if 2**variable === n
    if(num === 0){
        return false
    }else if(num === 1){
        return true
    }
    let exponent = Math.round(Math.log(num) / Math.log(2))
    return 2**exponent === num

}

console.log(isPowerOfTwo(64))//true
console.log(isPowerOfTwo(524292))//false
console.log(isPowerOfTwo(536870912))//true