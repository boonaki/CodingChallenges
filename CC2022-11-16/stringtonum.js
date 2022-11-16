// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

//given an array of numbers, but in type string, never empty
//return an array of the same values, but in type number

function toNumberArray(arr){
    //map the array
    //run the parseFloat method
    //return new array
    return arr.map(e => parseFloat(e))
}

console.log(toNumberArray(['1.1','2.2','3.3']))//[1.1, 2.2, 3.3]