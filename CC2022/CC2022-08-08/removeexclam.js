//Write a function that removes all exclamation marks from a sentence

//P: given a string value, never empty but may not contain exclamation marks
//R: reutnr the string with exclamation marks remvoved
//E:

function remove(string){
    //while the last element is === "!"
    //slice the string from the start to last-1 (0,-1)
    //return string
    while(string.slice(-1) === "!"){
        string = string.slice(0,-1)
    }
    return string
}

console.log(remove("Hello!"))//Hello
console.log(remove("!!Hello!"))//!!Hello
console.log(remove("Hello!!!!"))//Hello
console.log(remove("Hello"))//Hello
