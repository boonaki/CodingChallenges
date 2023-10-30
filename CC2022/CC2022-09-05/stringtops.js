// // Write a function that accepts msg string and returns local tops of string from the highest to the lowest.
// // The string's tops are from displaying the string in the below way:
//                                                       3 
//                               p                     2   4
//             g               o   q                 1
//   b       f   h           n       r             z 
// a   c   e       i       m          s          y
//       d           j   l             t       x
//                     k                 u   w 
//                                         v

//P: given a string, can be empty
//R: return a string containg only the tops, but reversed
//E:

function stringTops(msg) {
    //define empty 2 arrays
    //define even as 2 and odd as 1
    //define bool up as true
    //for length of string
    //if up is true
    //push current elem into second array
    //if length of array is equal to even, then push current elem into first array, make up false, clear second array and increment even by 2
    //if up is false
    //push current elem into second array
    //if length of array is equal to odd, then push current elem into first array, make up false, clear second array and increment odd by 2
    //return reversed and joined first array
    msg = msg.split('')
    let array1 = [], array2 = []
    let even = 2, odd = 1
    let up = true
    for (let i = 0; i < msg.length; i++) {
        if (up) {
            array2.push(msg[i])
            if (array2.length === even) {
                array1.push(msg[i])
                array2 = []
                even += 2
                up = false
            }
        } else {
            array2.push(msg[i])
            if (array2.length === odd) {
                array2 = []
                odd += 2
                up = true
            }
        }
    }
    return array1.reverse().join('')
}

console.log(stringTops('abcdefghijklmnopqrstuvwxyz12345'))//'3pgb'
console.log(stringTops('abcdefghijklmnopqrstuvwxyz1236789ABCDEFGHIJKLMN'))//'M3pgb'