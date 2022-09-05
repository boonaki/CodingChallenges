// This program tests the life of an evaporator containing a gas.

// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

// The program reports the nth day (as an integer) on which the evaporator will be out of use.

//P: given a 3 values represented as the content, how much evaporated in a day (as a percent), and the amount of foam that has to remain
//R: return the day that content reaches threshold
//E:

function evaporator(content, evap_per_day, threshold) {
    //define count
    //define percent
    //while percent is greater than threshold
    //redefine percent as the difference of the decimal of evap_per_day and percent
    //increment count
    //return count
    let count = 0
    let percent = 100
    while (percent > threshold) {
        percent -= (evap_per_day * percent) / 100
        count++
    }
    return count

}

console.log(evaporator(10, 10, 5))//29
console.log(evaporator(10, 10, 10))//10