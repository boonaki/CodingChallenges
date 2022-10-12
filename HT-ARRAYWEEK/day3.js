// write a function that:

//     takes in a given array of strings and move any entries containing the letter 'a' to the front
//     then move any remaining entries that have over 3 characters to the back
//     please preserve the relative order of entries within their given category


//given an array of strings
//return the array with all entries containing the letter a moved to the front

function aString(arr){
    //declare new variable to store filtered array with elements that include a are kept in
    //store filtered array with elements that dont include a into arr
    //return array.concat(arr)
    let containsA = arr.filter((elem) => elem.includes('a'))
    arr = arr.filter((elem) => !elem.includes('a'))
    return containsA.concat(arr)
}

console.log(aString(['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']))//['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']