// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//P: take in string, could be an empy string
//R: return the reversed string
//E:

function reversedString(string){
    //turn string into array
    //reverse array
    //join and return
    return str.split("").reverse().join('')
}

console.log(reversedString('hello'))//'olleh'
console.log(reversedString('world'))//'dlrow'
console.log(reversedString(''))//''
