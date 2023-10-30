// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

//given a string of charaxcters, can be empty
//return a number representing the total of all the asc2 values for each character

function uniTotal(str) {
    //check if string is empty, if os then return 0
    //split string, run map loop
    //convert each char to asc code
    //reduce and return
    if (str) {
        return str.split('').map(e => e.charCodeAt(0)).reduce((a, c) => a + c)
    } else {
        return 0
    }
}

console.log(uniTotal(''))//0
console.log(uniTotal('aaa'))//291
console.log(uniTotal('Boonaki'))//707