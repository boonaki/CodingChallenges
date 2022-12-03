// Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.


//given a string, can contain numbers of any length, never empty
//return the string with the number incremented, where if there is none a 1 is appended to the string

function incrementString(str){
    //slice char from string and store into variable
    //find last digit
    //if last digit is not a digit
    //return str + '1'
    //else if last digit is not === 9
    //return the sliceed string plus the incremented digit
    //else recurse with sliced string + '0'
    let stringBody = str.slice(0,-1)
    let last = str.slice(-1)
    return isNaN(last) ? str + '1' : last != '9' ? stringBody + (+last +1) : incrementString(stringBody) + '0'
}

console.log(incrementString('foo'), 'foo1')
console.log(incrementString('foo00'), 'foo01')
console.log(incrementString('foo0043'), 'foo0044')
console.log(incrementString('foo099'), 'foo100')