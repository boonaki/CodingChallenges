// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

//given a string, could contain numbers
//return an array of subarrays containing keys and values of each character and count of each character

function orderedCount(text) {
    //define empty object and array
    //foreach character in text
    //check if type is integer
    //add space to property key and check if property key exists, if it does then increment
    //if not integer, check if property key exists and if it does then increment
    //run object loop
    //check if key in object is integer
    //if it is, then remove space in key and push info in arr
    //if it isnt then push info into arr
    //return array
    let obj = {}
    let arr = []
    text.split('').forEach((char) => {
        if (+char === parseInt(char)) {
            obj[' ' + char] ? obj[' ' + char]++ : obj[' ' + char] = 1
        } else {
            obj[char] ? obj[char]++ : obj[char] = 1
        }
    })
    for (key in obj) {
        if (+key === parseInt(key)) {
            let keyVal = key.split('').slice(1).join('')
            arr.push([`${keyVal}`, +`${obj[key]}`])
        } else {
            arr.push([`${key}`, +`${obj[key]}`])
        }
    }
    return arr
}

console.log(orderedCount('boonaki'))//[[ 'b', 1 ], [ 'o', 2 ], [ 'n', 1 ], [ 'a', 1 ], [ 'k', 1 ], [ 'i', 1 ]]
console.log(orderedCount('1223334444567'))//[ [ '1', 1 ], [ '2', 2 ], [ '3', 3 ], [ '4', 4 ], [ '5', 1 ], [ '6', 1 ], [ '7', 1 ]]
console.log(orderedCount('the guot'))//[ [ 't', 2 ], [ 'h', 1 ], [ 'e', 1 ], [ ' ', 1 ], [ 'g', 1 ], [ 'u', 1 ], [ 'o', 1 ]]