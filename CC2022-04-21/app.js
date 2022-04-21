// Complete the function that takes two integers (a, b, where a < b)
//  and return an array of all integers between the input parameters, including them.

function between(a, b) {
    let arr = []
    for(let i = a; i <= b; i++){
        arr.push(i)
    }
    return arr
}

console.log(between(1, 4)) //should output 
console.log(between(-2, 2)) //should output 
console.log(between()) //should output 