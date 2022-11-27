//given a base and a factor
//return a boolean if the factor is indeed a factor of the base number

function isFactor(base, factor){
    return base % factor === 0
}

console.log(isFactor(10,2))//true
console.log(isFactor(11,2))//false