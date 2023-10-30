// Write a function named which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. 

//P: given a single whole, integer value
//R: return the sum of each digit in the number

function sumDigits(number){
    //convert to string and split, filter typeof number
    //convert each value in array to number and reduce
    return number.toString().split('').map((num) => +num == num ? +num : num).filter((elem) => typeof elem === 'number').reduce((acc,curr) => acc + curr,0)
}

console.log(sumDigits(10))//1
console.log(sumDigits(99))//18
console.log(sumDigits(741))//12