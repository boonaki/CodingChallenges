// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

//P: given a single whole number representing the height of the tower
//R: return an array, with the same number of elements as the given parameter, each with the same string length
//E:

function buildTower(floors) {
    //create placeholder array
    //initialize star count to 1
    //loop from 1 to floor number
    //repeat spaces with floor number minus current loop count
    //repeat stars based on number of stars
    //repeat spaces with floor number minus current loop count
    //concat strings and define result element for current loop
    //add 2 to stars
    //return result 
    let result = [];
    let starNumber = 1;
    for (i = 1; i <= floors; i++) {
        result[i - 1] = " ".repeat(floors - i) + "*".repeat(starNumber) + " ".repeat(floors - i);
        starNumber += 2;
    }
    return result;
}

console.log(buildTower(1))//["*"]
console.log(buildTower(2))//[" * ","***"]
console.log(buildTower(3))//["  *  "," *** ","*****"]
console.log(buildTower(6))//["     *     ", "    ***    ", "   *****   ", "  *******  ", " ********* ", "***********"]