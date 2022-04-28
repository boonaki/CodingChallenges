//Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

function squareArea(A){
    A = ((A * 360) / (180 * Math.PI))
    A = A*A
    return Math.round(A*100)/100
}

console.log(squareArea(2)) //should output 1.62
console.log(squareArea(0)) //should output 0
console.log(squareArea(14.05)) //should output 80
console.log(squareArea(29.415226585690263)) //should output 350.67