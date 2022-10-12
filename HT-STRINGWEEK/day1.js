// Oh no! How did this happen?! Somehow similar-looking numbers and letters have been confused in our document. Someone may have been messing around writing naughty words on a calculator. We need to get them back to normal.

// Below, find the mix-ups that have been made. Note: the confusion happened in both directions and was case-sensitive.

// '0' <-> 'O'      '5' <-> 'S'
// '1' <-> 'I'      '6' <-> 'G'
// '2' <-> 'Z'      '7' <-> 'L'
// '3' <-> 'E'      '8' <-> 'B'
// '4' <-> 'h'      '9' <-> 'q'

// As an example, here is how a string looks before and after the characters are fixed:

// "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." 
// // implement fix function -> 
// "PRO-TIP #498: IT'S NICE TO SAY HELLO."

// Please create a function that will fix a given string of this mistake before incalculable damage can be done!

//given a string, with numbers replacing some letters, all uppercased
//return the string, but corrected (numbers replaced with letters)

function day1(str){
    //create object with keys as numbers and values as the letter correction
    //convert object keys to array
    //split string and map array
    //check if current char is in object keys array
    //if so then convert char to property value
    //return char
    //return array
    let obj = {
        '0' : 'O',
        '1' : 'I',
        '2' : 'Z',
        '3' : 'E',
        '4' : 'h',
        '5' : 'S',
        '6' : 'G',
        '7' : 'L',
        '8' : 'B',
        '9' : 'q',

        'O' : '0',
        'I' : '1',
        'Z' : '2',
        'E' : '3',
        'h' : '4',
        'S' : '5',
        'G' : '6',
        'L' : '7',
        'B' : '8',
        'q' : '9',
    }
    let keys = Object.keys(obj)
    str = str.split('').map((char) => {
        if(keys.includes(char)){
            char = obj[char]
        }
        return char
    }).join('')
    return str
}

console.log(day1(`PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770.`))//"PRO-TIP #498: IT'S NICE TO SAY HELLO."