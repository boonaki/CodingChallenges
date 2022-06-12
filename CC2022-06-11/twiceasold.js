// Your function takes two arguments:

//     current father's age (years)
//     current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

//P: given two positive whole numbers
//R: return how many years it will take for the father age to be double son age
//E:

function twiceAsOld(dad,son){
    //multiply son years by 2
    //subtract dad years
    return Math.abs(son * 2 - dad)
}

console.log(twiceAsOld(36,7))//22
console.log(twiceAsOld(55,30))//5
