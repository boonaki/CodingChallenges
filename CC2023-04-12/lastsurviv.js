// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

//given a string of characters and an array of numbers
//return a string with all the characters at the positions given in the array removed from the string

function lastSurvivor(letters, coords) {
    //split letters
    //loop for length of coords
    //splice from coords[i] to 1
    //return joined string
    letters = letters.split('');
    for (let i = 0; i < coords.length; i++) {
        letters.splice(coords[i], 1)
    }
    return letters.join('')
}

console.log(lastSurvivor('abc', [1, 1]), 'a')