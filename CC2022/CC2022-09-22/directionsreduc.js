// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

//given an array of strings, of varying case and consisting of 'north' 'west' 'south' and 'east'
//return an array of strings representing a simplified version
//E:

function dirReduc(arr) {
    //create object with contradictory values n: s, e: w, w: e, s: n
    //copy directions into new array
    //loop through directions length
    //check if property value of current is equal to the next direction
        //if so, slice directions from current index to 2
        //check if i is equal to 0, and if not decrement i
    //if not equal, increment i
    //return directions
    var oppositeDirections = {
        NORTH: 'SOUTH',
        SOUTH: 'NORTH',
        WEST: 'EAST',
        EAST: 'WEST'
    };
    var directions = arr.slice(0);
    for (var i = 0; i < directions.length - 1;) {
        if (oppositeDirections[directions[i]] === directions[i + 1]) {
            directions.splice(i, 2);
            i = (i === 0) ? 0 : i - 1;
        } else {
            i += 1;
        }
    }
    return directions;


}

console.log(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST']))//['EAST']
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))//['WEST']
console.log(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']))//['NORTH', 'WEST', 'SOUTH', 'EAST']
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]))//[]
