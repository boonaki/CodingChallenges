//In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

//P: A number value, possible fractional digits, pos or neg
//R: console log true or false if number is even or odd, respectively
//E:

function evenOrOdd(num){
    //use % to check whether number is even or odd
    return num % 2 === 0
}

console.log(evenOrOdd(0)) //true
console.log(evenOrOdd(0.5)) //false
console.log(evenOrOdd(1)) //false
console.log(evenOrOdd(2)) //true
