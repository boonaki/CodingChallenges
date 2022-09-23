// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

//given a birth year and a current year
//return the correct string containing how many years old they are, or how many years they will be born
//E:

function calculateAge(birth, year) {
    //check if birth is less than year
    //subtract year from birth to find age
    //return corresponding string using ternary to check if year is plural or not
    //else if birth is greater than year
    //repeat above
    //else, return you were born this year
    if (birth < year) {
        return year - birth === 1 ? 'You are 1 year old.' : `You are ${year - birth} years old.`
    } else if (birth > year) {
        return birth - year === 1 ? 'You will be born in 1 year.' : `You will be born in ${birth - year} years.`
    } else {
        return 'You were born this very year!'
    }
}

console.log(calculateAge(2012, 2016))//"You are 4 years old."
console.log(calculateAge(2020, 2010))//"You will be born in 10 years."
console.log(calculateAge(2012, 2012))//"You were born this very year!"