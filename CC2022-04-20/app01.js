// Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr (n, s) {
    let stringer = []
    for(let i = 0; i < n; i++) stringer += s
    return stringer
}

console.log(repeatStr(3, "*"))//'***'
console.log(repeatStr(4, "ha "))//'ha ha ha ha'
console.log(repeatStr(5, "#"))//'#####'