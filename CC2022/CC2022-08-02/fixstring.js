//Write a function when given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on which change has fewest changes to the string, if lowercase count is equal to uppercase count, make string lowercase.

//P: given a string of characters, never empty, of random lowercase and uppercase letters
//R: return the given string, but either uppercase or lowercase
//E:

function fixString(str){
    //declare and initialize lower and upper counts to 0
    //split string and run array foreach loop
    //in loop, if lowercase then add 1 to lowercount, if uppercase then add 1 to upper count
    //check which count is greater and return modified str
    let upper = 0
    let lower = 0
    str.split('').forEach((elem) => {
      elem === elem.toUpperCase() ? upper++ : lower++
    })
    return lower >= upper ? str.toLowerCase() : str.toUpperCase()
}

console.log(fixString('grape'))//grape
console.log(fixString('GRape'))//grape
console.log(fixString('grAPE'))//GRAPE
