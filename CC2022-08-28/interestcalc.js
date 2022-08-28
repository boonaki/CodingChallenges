// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum. 

//P: given 4 number values, a starting amount, a desired amount, tax percentage (in decimal) and interest percentage (in decimal)
//R: return the number of years it would take for the starting amount to reach desired amount after accrueing interest
//E:

function calcYears(principal, interest, tax, desired) {
    //initialized year count variable
    //while princpal <= desired
    //define variable to hold amount accrued for the year
    //subtract tax percentage from amount accrued and add to principal
    //increment year
    //return year
    let year = 0
    if (principal >= desired) {
        return year
    }
    while (principal <= desired) {
        let accrued = principal * interest
        accrued = accrued - (accrued * tax)
        principal += accrued
        year++
    }
    return year
}

console.log(calcYears(1000.00, 0.05, 0.18, 1100.00))//3
console.log(calcYears(1000, 0.01625, 0.18, 1200))//14
console.log(calcYears(1000, 0.05, 0.18, 1000))//0