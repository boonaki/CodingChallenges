// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

//given a number representing size, always whole but can be negative
//return null if number is even or negative, and if odd then return a string

function diamond(n) {
    //check if number is even or negative and return null if so
    //init empty string
    //init spaces variable indicating how many spaces needed ((n - 1) / 2)
    //init odd count indicating how many stars
    //init boolean indicating when moving up or down
    //loop through from 0 < n
    //add repeated spaces and repeated stars into string
    //if going up, then add 2 to star count and decrement space
    //if going down, subtract 2 from star count and increment space
    //return string
    if (n % 2 === 0 || n < 1) {
        return null
    }
    let str = ''
    let odd = 1
    let spaces = (n - 1) / 2
    let up = true
    for (let i = 0; i < n; i++) {
        str += ' '.repeat(spaces) + '*'.repeat(odd) + '\n'
        if (up) {
            odd += 2
            spaces -= 1
            if (odd === n) {
                up = false
            }
        } else {
            odd -= 2
            spaces += 1
        }
    }
    return str
}

console.log(diamond(1))//'*\n'
console.log(diamond(3))//" *\n***\n *\n"
console.log(diamond(5))//"  *\n ***\n*****\n ***\n  *\n"