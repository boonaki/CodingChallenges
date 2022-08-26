// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

//     sz is <= 0 or if str is empty return ""
//     sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".


//P: given a string of digits and a integer value, all whole numbers, sz may be less than or equal to 0
//R: return the string either rotated, or reversed based on if a chunk (size determined by sz) is the sum of the cubed digits is divisible by 2 (n % 2 === 0)
//E:

function reverseOrRotate(str, sz) {
    //check if size si less/equal to 0, or if sz is greater than str length: return empty string
    //convert str to array
    //declare empty array
    //while strlength > sz
    //slice from 0-sz and convert to array of integers, and push sliced portion into empty array
    // and set str as rest of unsliced string
    if (str.length < sz || sz <= 0) {
        return ""
    }
    str = str.split('')
    let arr = []
    while (str.length >= sz) {
        let substr = str.slice(0, sz)
        let sumOfCubes = substr.reduce((acc, curr) => +acc + curr ** 3, 0)
        if (sumOfCubes % 2 === 0) {
            arr.push(substr.reverse().join(''))
        } else {
            let first = substr.shift()
            substr.push(first)
            arr.push(substr.join(''))
        }
        str = str.slice(sz)
    }
    console.log(arr)
    return arr.join('')


}

console.log(reverseOrRotate("123456987654", 6))//"234561876549"
console.log(reverseOrRotate("66443875", 4))//"44668753"
console.log(reverseOrRotate("733049910872815764", 5))//"330479108928157"