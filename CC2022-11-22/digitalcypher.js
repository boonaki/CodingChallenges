//given a string and a number, always valid inputs
//return a encoded array, where each letter represents a number that is added from a value in the key (loop linearly through each digit)

function encode(str, n) {
    //split and map
    //convert each to charcode and subtract 96 to make 1-27
    //convert n to string and split
    //map string array
    //add current value to n with modulo
    //return mapped array
    str = str.toLowerCase().split('').map(e => e.charCodeAt(0) - 96)
    n = n.toString().split('')
    return str.map((num, i) => {
        num += +n[i % n.length]
        return num
    })
}

console.log(encode('scout', 1939))//[ 20, 12, 18, 30, 21 ]
console.log(encode('masterpiece', 1939))//[ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]