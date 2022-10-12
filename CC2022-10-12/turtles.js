// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

//given 3 integers, v1 representing racer 1's feet per hour, v2 for racer 2's feet per hour and how much of a lead racer 1 has
//return an array [hours, mins, sec] with seconds being rounded down to nearest second

function tortoiseRace(v1,v2,lead){
    //check if v1 >= v2, if so return null
    //find difference betwen between v2 and v1
    //init seconds as (lead * 3600) / difference
    //return [seconds/3600, (seconds % 3600) / 60, seconds % 60]
    if(v1 >= v2){
        return null
    }
    let difference = v2-v1
    let seconds = (lead * 3600) / difference
    return [Math.trunc(seconds/3600), Math.trunc((seconds % 3600) / 60), Math.trunc(seconds % 60)]
}

console.log(tortoiseRace(720,850,70))//[0, 32, 18]
console.log(tortoiseRace(80, 91, 37))//[3, 21, 49]