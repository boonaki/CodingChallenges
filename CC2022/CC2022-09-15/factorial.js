// Your task is to write function factorial.

//given a single whole digit number
//return the factorial of that number
//

function factorial(num) {
    //define empty array
    //loop from 1 to n and push current number into array
    //reduce array by multiplication and return
    let productArr = []
    for (let i = 1; i <= num; i++) {
        productArr.push(i)
    }
    return productArr.reduce((acc, curr) => acc * curr, 1)
}

console.log(factorial(1))//1
console.log(factorial(18))//6402373705728000
console.log(factorial(6))//720