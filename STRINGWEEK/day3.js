
//given a string, of any case
//return the string with the key characters replaced with a " ", key is case sensitive

function decode(str){
    let key = ['S', 'p', 'a', 'c', 'e']
    str = str.split('').map((char) => key.includes(char) ? char = " ": char).join('')
    return str
}

console.log(decode('TSEpXaTc!e!'))