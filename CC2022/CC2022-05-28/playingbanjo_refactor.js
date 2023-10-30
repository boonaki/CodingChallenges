// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

// Names given are always valid strings.

//P: give name string, always valid strings
//R: return string that says the name does play banjo if first letter is r or R "Ringo plays banjo"
//E:

function areYouPlayingBanjo(name){
    //find first letter in name
    //convert to lowercase
    //conditional if char === r
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}

console.log(areYouPlayingBanjo('Ringo'))//"Ringo plays banjo"
console.log(areYouPlayingBanjo('rolf'))//"rolf plays banjo"
console.log(areYouPlayingBanjo('Adam'))//"Adam does not play banjo"