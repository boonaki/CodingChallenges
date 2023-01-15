// A variation of determining leap years, assuming only integers are used and years can be negative and positive.
// Write a function which will return the days in the year and the year entered in a string.
// There are a few assumptions we will accept the year 0, even though there is no year 0 in the Gregorian Calendar.
// Also the basic rule for validating a leap year are as follows
// Most years that can be divided evenly by 4 are leap years.
// Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400.
// So the years 0, -64 and 2016 will return 366 days. Whilst 1974, -10 and 666 will return 365 days.

//given a year as a number, always a whole number but can be positive or negative
//return how many days are in the year, where if it is normal return 365, if it is leap year then return 366

function yearDays(year){
    //check if absolute val of year modulo 4 is equal to 0, where if it is then return 366, else return 365
    if(year % 4 === 0){
        if(year % 100 === 0){
          return year % 400 === 0 ? `${year} has 366 days` : `${year} has 365 days`
        }else{
          return `${year} has 366 days`
        }
      }
    return `${year} has 365 days`
}

console.log(yearDays(2016))//'2016 has 366 days'
console.log(yearDays(0))//'0 has 366 days'
console.log(yearDays(-64))//'-64 has 366 days'
console.log(yearDays(1972))//'1972 has 366 days'