// Write a function which processes this sequence of operations on an integer n (>=0). thirt will return the stationary number.
// thirt(1234567) calculates 178, then 87, then 87 and returns 87.
// thirt(321) calculates 48, 48 and returns 48

//P: given a single, whole positive number value, could be of arbitrary length
//R: return a integer represented as a stationary number, where the staionary number mod 13 is equal to n mod 13
//E:

function thirt(n){
    //init base nums [1,10,9,12,3,4]
    //convert number to string and reduce, multplying current num by the number in base nums in a loop
    //return n or run loop again
    const nums = [1,10,9,12,3,4]
    let sum = (''+n).split('').reverse().reduce((acc,curr,i) => acc + curr * nums[i % nums.length], 0)
    return sum === n ? n : thirt(sum)

}

console.log(thirt(1234567))//87
console.log(thirt(85299258))//31
console.log(thirt(1111111111))//71