// In a small town the population is p0 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p inhabitants?

//P: given 4 number values: p0 as a base population, percentage representing growth percentage every year, aug representing a whole number of new inhabitants ontop of the percent growth, and the target population
//R: return a whole (rounded) number value representing the number of years it would take for the base population to reach or surpass the target population
//E:

function populationGrowth(p0, percent, aug, p){
    //convert percent to decimal
    //create year variable
    //while p0 <= p
    //multiply p0 by percentage, add aug and add into p0
    //increment year
    //after while, return year
    percent = percent / 100
    let year = 0
    while (p0 < p){
        p0 += Math.floor((p0 * percent) + aug)
        year++
    }
    return year
} 

console.log(populationGrowth(1000,2,50,1200))//3 years
console.log(populationGrowth(1500000, 2.5, 10000, 2000000))//10
console.log(populationGrowth(1500000, 0.25, 1000, 2000000))//94