//You will be given an array of numbers to convert to an ascii character.
//It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

let ArrowFunc = function(arr) {
    return arr.map( (num) => String.fromCharCode(num) ).join(''); //Complete this function
}

console.log(ArrowFunc([84,101,115,116])) //should equal 'Test'
console.log(ArrowFunc([70,85,83,32,82,79,72,32,68,65,72])) //should equal 'FUS ROH DAH'