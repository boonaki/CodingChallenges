// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

//P: Given a number that represents the total number of days that is rented
//R: reurn the total cost of the rental
//E:

function rentalCarCost(days){
    //create total variable
    //create loop
    //add 40 every loop
    //if i === 3 --> subtract 20 from total
    //if i === 7 --> subtract 30
    let total = 0
    for(let i = 1; i <= days; i++){
        total += 40
        if(i === 3){
            total -= 20
        }
        if(i === 7){
            total -= 30
        }
    }
    return total
}

console.log(rentalCarCost(1))//40
console.log(rentalCarCost(2))//80
console.log(rentalCarCost(3))//100
console.log(rentalCarCost(7))//230