// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//P: given string, contains x's and o's
//R: return true if number of X's is equal to O's inside string
//E:

function xo(str){
    //lowercase string
    //split into array
    //filter x's out
    //filter o's out
    //compare array lengths
    str = str.toLowerCase()
    str = str.split('')
    let arrX = str.filter((letter) => letter === 'x')
    let arrO = str.filter((letter) => letter === 'o')
    return arrX.length === arrO.length
}

console.log(xo('ooxx'))//true
console.log(xo('oOXx'))//true
console.log(xo('ooxxo'))//false
console.log(xo('ooxxoz'))//false
