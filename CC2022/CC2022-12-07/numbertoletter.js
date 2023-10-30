// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

//given a array of numbers in type string, always valid, always lowercase
//return a string with the numbers converted to their position in the alphabet reversed, with '!' '?' and ' ' being 27, 28 and 29

function numToLetter(arr) {
    //map array
    //subtract curr from 27 and add 90 something then convert to char from charcode
    //return joined array
    arr = arr.map((e) => {
        if (e === '27') {
            return '!'
        } else if (e === '28') {
            return '?'
        } else if (e === '29') {
            return ' '
        }
        let code = (27 - +e) + 96
        return String.fromCharCode(code)
    })
    return arr.join('')
}

console.log(numToLetter(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars')
console.log(numToLetter(['25', '7', '8', '4', '14', '23', '8', '25', '23', '29', '16', '16', '4', '27']), 'btswmdsbd kkw')