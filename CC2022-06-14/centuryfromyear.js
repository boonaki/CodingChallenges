// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task

// Given a year, return the century it is in.

//P: Given a valid year (positive)
//R: return the century that it is in
//E:

function century(year){
    //divide by 100
    //round number and return
    return Math.ceil(year/100)
}

console.log(century(1900))//19
console.log(century(1705))//18
console.log(century(1601))//17