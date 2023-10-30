// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

//P: takes in two numbers
//R: return remainder of two number, order should not matter so biggest % smallest
//E: 

function remainder(n, m){
    return n > m ? n % m : m % n
}

console.log(remainder(17,5))//2
console.log(remainder(13,72))//7