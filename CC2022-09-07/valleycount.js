// You need count how many valleys you will pass.

// Start is always from zero level.

// Every time you go down below 0 level counts as an entry of a valley, and as you go up to 0 level from valley counts as an exit of a valley.

// One passed valley is equal one entry and one exit of a valley.

//P: given a string of uppercase letters, where U=UP, F=FORWARD and D=DOWN
//R: starting at level 0, return a whole number representing the amount of times the current position crosses level 0 (up and down)
//E:

function countValleys(str) {
    //define a count variable
    //define entry level
    //define boolean for in valley
    //loop through string
    //if entry === -1 && in valley === false
    //in valley = true
    //if entry === 0 && in valley === true
    //increment count
    //switch statement
    //case 'U'
    //increase entry level
    //case 'F'
    //do nothing
    //case 'D'
    //decrease entry level
    let count = 0, entryLvl = 0;
    let inValley = false
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'U':
                entryLvl++
                break;
            case 'D':
                entryLvl--
                break;
            case 'F':
                break;
        }
        if (entryLvl === -1 && !inValley) {
            inValley = true
        }
        if (entryLvl === 0 && inValley) {
            count++
            inValley = false
        }
    }
    return count
}

console.log(countValleys('FUFFDDFDUDFUFUF'))//1
console.log(countValleys('UFFDDFDUDFUFUUFFDDUFFDDUFFDDUDUDUDUDUDUUUUUUUUU'))//