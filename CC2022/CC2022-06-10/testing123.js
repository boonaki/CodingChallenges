// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

//P: given an array of characters (of string type), can be empty
//R: an array with numbers appended to each character
//E: 

function numberObj(arr){
    //create empty array
    //loop through length of array
    //push `i: arr[i-1]`
    //return array
    let ansArray = []
    for(let i = 1; i <= arr.length; i++){
        ansArray.push(`${i}: ${arr[i-1]}`)
    }
    return ansArray
}

console.log(numberObj(['a', 'b', 'c']))//['1: a', '2: b', '3: c']