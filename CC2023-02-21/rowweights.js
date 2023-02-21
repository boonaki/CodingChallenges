// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

//given an array of integers
//return a new array of 2 integers, where the first is the total weight and the second is the total weight of team 2

function rowWeights(arr){
    //define team 1
    //define team 2 as numbers
    //loop through array
    //if i % 2 === 0
    //add to team 1
    //else add to team 2
    //return array
    let team1 = 0
    let team2 = 0
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            team1+=arr[i]
        }else{
            team2+=arr[i]
        }
    }
    return [team1, team2]
}

console.log(rowWeights([80]), [80,0])
console.log(rowWeights([100,50]), [100,50])