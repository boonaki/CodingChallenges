// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

// In effect: 89 = 8^1 + 9^2

// The next number in having this property is 135.

// See this property again: 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

//given 2 numbers, indicating a range of numbers, always whole never negative
//return an array of numbers whose digits with incrementing powers total to the digit itself

function eureka(a, b) {
    //declare empty array
    //loop from a to b
    //init current power to 1
    //convert num to string, split and store in new var
    //map through var, powering current digit by current power, incrementing current power after each digit
    //reduce var and check if equal to number, if it is then push to empty array
    //return array
    let arr = []
    for (let i = a; i <= b; i++) {
        let cp = 1
        let num = i.toString().split('')
        num = num.map((n) => {
            n = Math.pow(+n, cp)
            cp++
            return n
        }).reduce((a, b) => a + b, 0)
        if (num === i) {
            arr.push(i)
        }
    }
    return arr
}

console.log(eureka(1, 100))[1, 2, 3, 4, 5, 6, 7, 8, 9, 89]