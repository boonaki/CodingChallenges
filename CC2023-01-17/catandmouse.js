// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

// C.....m returns 'Escaped!' <-- more than three characters between

// C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.


//given a string, with the characters 'C', '.' and 'm'. Input is always valid
//return a string if the mouse was 'Caught!' or has 'Escaped'

function catAndMouse(str){
    //slice string from 1 to -1
    //grab length and check if the length is less than or equal to 3, where if it is return 'Caught!'
    //else return 'Escaped'
    let dist = x.slice(1,-1)
    return dist.length <= 3 ? 'Caught!' : 'Escaped!';
}

console.log(catAndMouse('C..m'), 'Caught!')
console.log(catAndMouse('C...m'), 'Caught!')
console.log(catAndMouse('C......m'), 'Escaped!')