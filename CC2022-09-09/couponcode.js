// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

//given 4 variables of type string, never empty representing a user input, correct input, currentdate and expirationdate
//return false if input and current date are invalid, else return true
//E:

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    //check if code is incorrect
    //create new dates from currentdate and expirationdate
    //check if currentdate has passed expirationdate
    //return true if all passed
    if (enteredCode !== correctCode) {
        return false
    } else {
        if (new Date(currentDate) > new Date(expirationDate)) {
            return false
        }
        return true
    }
}

console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'))//true
console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'))//false
console.log(checkCoupon('123', '123', 'September 5, 2015', 'October 1, 2014'))//false