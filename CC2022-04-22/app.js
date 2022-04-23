//Given a non-negative integer, 3 for example, return a string with a murmur: 
//"1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

function countSheep(num){
    let str = ""
    for(let i = 1; i <= num; i++){
        str += `${i} sheep...`
    }
    return str
}

console.log(countSheep(0)) //should output ''
console.log(countSheep(1)) //should output '1 sheep...'
console.log(countSheep(2)) //should output '1 sheep...2 sheep...'
console.log(countSheep(3)) //should output '1 sheep...2 sheep...3 sheep...'
