// This challenge is about multiplying a given number by eight if it is an even number and by nine otherwise.

//P: Given a valid whole number, no surprsing cases
//R: return the number * * if even, nine if odd
//E:

function simpleMultiply(num){
    //if num % 2 > 0, multiply by 9
    //if num % 2 === 0, multiply by 8
    return num % 2 ? num * 9 : num * 8
}

console.log(simpleMultiply(2))//16
console.log(simpleMultiply(3))//27