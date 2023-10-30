//Two integers are coprimes if the their only greatest common divisor is 1.
// Task

// In this kata you'll be given a number n >= 2 and output a list with all positive integers less than gcd(n, k) == 1, with k being any of the output numbers.

// The list cannot include duplicated entries and has to be sorted.
// Examples

// 2 -> [1]
// 3 -> [1, 2]
// 6 -> [1, 5]
// 10 -> [1, 3, 7, 9]
// 20 -> [1, 3, 7, 9, 11, 13, 17, 19]
// 25 -> [1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22, 23, 24]
// 30 -> [1, 7, 11, 13, 17, 19, 23, 29]

//P: given an integer >= 2, always a number
//R: return sorted array (least to greatest) of coprimes
//co primes are if the number in the array and incrementing number are only divisible by 1
//E:

function coprimes(n){
    //loop through every number from 1 - n
    //find gcf
    //if gcf === 1 then push to array
    //return sorted array
    let arr = []
    for(let i = 1; i < n; i++){
        if(gcd(n,i) === 1){
            arr.push(i)
        }
    }
    return arr.sort((a,b) => a-b)
}

let gcd = (num1, num2) => {
    //Loop till both numbers are not equal
    while(num1 != num2){
      //check if num1 > num2
      if(num1 > num2){
        //Subtract num2 from num1
        num1 = num1 - num2;
      }else{
        //Subtract num1 from num2
        num2 = num2 - num1;
      }
    }
    return num2;
}

console.log(coprimes(2))//[1]
console.log(coprimes(6))//[1,5]
console.log(coprimes(10))//[1,3,7,9]



