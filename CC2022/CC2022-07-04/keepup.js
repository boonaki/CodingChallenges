// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

//P: given a valid number
//R: if number is greater than or equal to 10 return "Great, now move on to tricks", if not return "Keep at it until you get it"
//E:

function keepUp(num){
    return num >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
}

console.log(keepUp(3))//"Keep at it until you get it"
console.log(keepUp(11))//"Great, now move on to tricks"
