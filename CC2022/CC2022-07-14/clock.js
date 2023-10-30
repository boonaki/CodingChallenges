// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

//P: given 3 integer values represented as hours minutes seconds
//R: return an integer value represented as the hours/min/sec, but in milliseconds
//E:

function clock(hour,min,sec){
    //create milliseconds variable
    //for every second, multiply by 1000 and add into milliseconds variable
    //for every minute, multiply by 60000 and add into milliseconds variable
    //for every hour, multiply by 3600000 and add into milliseconds variable
    let milli = 0
    milli += s * 1000
    milli += m * 60000
    milli += h * 3600000
    return milli
}

console.log(clock(0,1,1))//61000
console,log(clock(1,1,1))//3661000
console.log(clock(1,0,0))//3600000