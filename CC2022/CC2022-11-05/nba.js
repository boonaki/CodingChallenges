// An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

//given two numbers representing the points per game and the minutes per game, could be 0 never negative
//return a number rounded to the nearest tenth that would be the number of points scored if they played the entire game

function pointsPer48(ppg,mpg){
    //multiply mpg by 48 and divide ppg by new mpg
    //fix to 1 and return
    return +(ppg/mpg*48).toFixed(1) || 0
}

console.log(pointsPer48(12,20))//28.8
console.log(pointsPer48(10,10))//48
console.log(pointsPer48(0,0))//0