// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.


//given a floating point value, could be of arbitrary length
//return the value but rounded to two decimal places

function round(n){
    //round num multiply by 100 when rounding, divide rounded value by 100
    return Math.round(n * 100) / 100
}

console.log(round(3.1415926535))//3.14
console.log(round(173735326.3783732637948948))//173735326.38
console.log(round(4.653725356))//4.653725356