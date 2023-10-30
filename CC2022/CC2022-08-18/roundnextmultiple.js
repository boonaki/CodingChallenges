// Given an integer as input, round it to the next (meaning, "greater than or equal") multiple of 5

//P: given a single integer value, always whole, pos or neg
//R: return the nearest multiple of 5
//E:

function nextFive(n) {
    //if n % 5 === 0 --> return n
    //else
    //while n % 5 !== 0, increment n
    //return n
    if (n % 5 === 0) {
        return n
    } else {
        while (n % 5 !== 0) {
            n++
        }
        return n
    }
}

console.log(nextFive(0))//0
console.log(nextFive(1))//5
console.log(nextFive(-1))//0
console.log(nextFive(-5))//-5