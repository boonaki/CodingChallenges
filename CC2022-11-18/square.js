//given an number, always whole between 1 and 50
//return a string representing a shape that is as long as n and as wide as n

function buildSquare(num) {
    //declare string variable
    //loop for legnth
    //loop for width
    //add to string varaible and return
    let str = ""
    for (let i = 0; i < integer; i++) {
        for (let j = 0; j < integer; j++) {
            str += '+'
        }
        if (i !== integer - 1) {
            str += '\n'
        }
    }
    return str
}

console.log(buildSquare(3))//'+++\n+++\n+++