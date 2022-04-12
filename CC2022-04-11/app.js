// Write a function that will check if two given characters are the same case.

//     If any of characters is not a letter, return -1
//     If both characters are the same case, return 1
//     If both characters are letters and not the same case, return 0

function sameCase(a, b){
    if(a.toLowerCase() === a.toUpperCase()){ //checks if integer
        return -1
    }else if(b.toLowerCase() === b.toUpperCase()){
        return -1
    }

    if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){ //checks if same case
        return 1
    }else{
        return 0
    }
}

console.log(sameCase('C', 'B')) //should equal 1
console.log(sameCase('b', 'a')) //should equal 1
console.log(sameCase('d', 'd')) //should equal 1
console.log(sameCase('A', 's')) //should equal 0
console.log(sameCase('c', 'B')) //should equal 0
console.log(sameCase('\t', 'Z')) //should equal -1
console.log(sameCase('H', ':')) //should equal -1