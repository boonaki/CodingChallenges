// A Tidy number is a number whose digits are in non-decreasing order.

//given a number always valid
//return if the number is sorted

function tidyNum(n) {
    //convert to string store in new variable
    //split
    //sort
    //return if equal to original
    let newNum = n.toString().split('').sort().join('')
    return +newNum === n

}

console.log(tidyNum(12), true)
console.log(tidyNum(102), false)