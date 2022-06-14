// In this challenge, you are asked to square every digit of a number and concatenate them

//P: govem a valid whole number
//R: return each digit squared and concatenated back together
//E:

function squareDigits(num){
    //convert to string
    //split digits into array
    //map through array and square each number
    //join array
    //convert string to num and return
    num = num.toString().split('').map((num) => num**2).join('')
    return +num
}

console.log(squareDigits(9119))//811181
console.log(squareDigits(2112))//4114
