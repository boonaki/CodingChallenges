// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

//given an array of number values, can be empty
//return an array of size 2, containing the sums of teams 1 and 2

function rowWeights(arr){
    //declare team1 and team2 variables
    //filter out even elements and store into team1, and odd into team2
    //reduce, store into array and return
    let team1 = arr.filter((e,idx) => idx % 2 === 0).reduce((a,c) => a + c, 0)
    let team2 = arr.filter((e,idx) => idx % 2 !== 0).reduce((a,c) => a + c, 0)
    return [team1,team2]
}

console.log(rowWeights([90]))//[90,0]
console.log(rowWeights([90,80,40,20,10,10,10]))//[150,110]
console.log(rowWeights([90,4,20,6,17]))//[127,10]