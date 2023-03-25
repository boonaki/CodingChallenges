// Your task is simply to count the total number of lowercase letters in a string.

//given a string
//return the number of lowercase characters in the string

function lowerCaseCount(str){
    //regex
    return (str.match(/[a-z]/g) || []).length
}

console.log(lowerCaseCount('abc'), 3)
console.log(lowerCaseCount('abcDEF'), 3)
console.log(lowerCaseCount('Boonaki'), 6)