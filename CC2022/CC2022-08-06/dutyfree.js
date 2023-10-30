// The purpose of this challenge is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday. 

//P: Given 3 whole integer values, representing the normal price, the discount in percent, and the cost of the holiday
//R: return a integer value representing the number of bottles you would need to buy (with the discount) that would equal to the total cost of the holiday, from what was saved
//E:

function dutyFree(normPrice, discount, holiday) {
    //initialize costcheck variable to 0
    //initialize loopcount
    //loop until costcheck is greater than or equal to holiday price
    //in loop, subtract discount from norm price
    //store amount discounted into costcheck
    //increment loopcount
    //after loop, return loopcount - 1
    let costCheck = 0
    let loopCount = 0
    let discountedPrice = (discount / 100) * normPrice
    while (costCheck < holiday) {
        costCheck += discountedPrice
        loopCount++
    }
    return loopCount - 1
}

console.log(dutyFree(12, 50, 1000))//166
console.log(dutyFree(17, 10, 500))//294
console.log(dutyFree(24, 35, 3000))//357
