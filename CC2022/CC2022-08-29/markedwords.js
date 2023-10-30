// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.


//P: given a string of all lowercase characters and never empty
//R: return the sum of the characters if a = 1, b = 2...
//E:

function markedWords(string) {
    //split string
    //for each character, find character code and subtract 96, and add into sum 
    let sum = 0
    string.split('').forEach((elem) => sum += elem.charCodeAt(0) - 96)
    return sum
}

console.log(markedWords('attitude'))//100
console.log(markedWords('family'))//66
console.log(markedWords('boonaki'))//67