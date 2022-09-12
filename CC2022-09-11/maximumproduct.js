// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

//given an array of ints, array is always atleast 2 and numbers can be positive or negative
//return the greatest product of 2 adjacent numbers within an array
//E:

function adjacentProduct(arr) {
    //define product variable and init to 0
    //loop through length of array
    //slice from current position to current position + 1 and multiply given value by next value
    //if new product is greater than product then reassign product to new product
    //return product
    let product = 0
    for (let i = 0; i < arr.length; i++) {
        let newProduct = arr.slice(i, i + 1)[0] * arr[i + 1]
        if (product === 0 && i !== arr.length - 1) {
            product = newProduct
        }
        if (newProduct > product) {
            product = newProduct
        }
    }
    return product
}

console.log(adjacentProduct([5, 8]))//40
console.log(adjacentProduct([1, 2, 3]))//6
console.log(adjacentProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]))//-14
