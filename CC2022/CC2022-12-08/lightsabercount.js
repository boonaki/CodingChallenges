//write a function that accepts a name in type string and returns the count that that name has in type number, where only 'boonaki' has 18 where as everyone else has 0

//given a string, always valid, can be empty
//return the number 17 if input is 'boonaki', 0 if anything else

function lightsaberCount(name){
    //ternary check if input is boonaki, return 17 else 0
    return name === 'boonaki' ? 17 : 0
}

console.log(lightsaberCount('boonaki'))//17
console.log(lightsaberCount('rguo'))//0