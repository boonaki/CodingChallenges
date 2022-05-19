// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

//P: given 2 stings of 2 names, first is name and the other being owner
//R: return new string with names in a personalized message dependent on sender
//E:

function greet(name, owner){
    //compare if strings are the same
    //if they are return 'Hello boss'
    //if not, return 'Hello guest'
    return name === owner ? 'Hello boss' : 'Hello guest';
}

console.log(greet('Daniel', 'Daniel'))//Hello boss
console.log(greet('Greg', 'Daniel'))//Hello guest