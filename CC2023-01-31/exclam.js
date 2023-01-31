// Remove n exclamation marks in the sentence from left to right. n is positive integer.

//given a string and a number, always valid
//return the string with the exclamation marks removed from left to right, but only remove n exclamation marks

function remove(s, n) {
    //define empty return string
    //run through length of string
    //check if n is greater than 0
    //if so add current character into return string
    //check if current is a '!', if so decrement number
    //if not
    //check if current is not a '!' and add to string
    let retStr = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '!' && n > 0) {
            n--
        } else {
            retStr += s[i]
        }
    }
    return retStr
}

console.log(remove('!!Hi!', 2), 'Hi!')
console.log(remove('!!Hi!!!!!!!!!!!!!!!', 100), 'Hi')
console.log(remove('!!!Hi!!!Hello!!!!!!!!!!!!', 6), 'HiHello!!!!!!!!!!!!')