//Write a function using regex that validates a username to be between 4-16 characters in length and only include lowercase, numbers or '_'

//P: given a string, may be empty
//R: return if the string passes checks using regex
//E

function validateUser(username){
    return /^[a-z0-9_]{4,16}$/.test(username)
}

console.log(validateUser('user'))//true
console.log(validateUser('_user1'))//true
console.log(validateUser('use'))//false
console.log(validateUser('userA'))//false
