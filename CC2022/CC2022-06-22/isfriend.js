// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

//P: Given an array of string values
//R: return an array populated with the friends whose name length is === 4
//E:

function friend(friends){
    //filter every element that has the length of 4
    return friends.filter((elem) => elem.length === 4)
}

console.log(friend(["Ryan", "Kieran", "Mark"]))//["Ryan", "Mark"]
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))//["Ryan"]