// Two red beads are placed between every two blue beads. There are N blue beads, return the number of red beads

//given a single whole integer
//return the amount of red beads (2 between 2 blue beads (blue red red blue))
//E:

function countRed(n){
    //init count var to (n - 1) * 2
    //return count or 0 if n is 0
    let count = (n-1)*2
    return n === 0 ? 0 : count
}

console.log(countRed(1))//0
console.log(countRed(0))//0
console.log(countRed(2))//2