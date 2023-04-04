// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

//given 2 strings, always valid
//return a sorted string of unique values

function longest(s1,s2){
    //concat s1 to s2
    //split result
    //filter where only index of current is equal to current
    //sort, join and return
    return s1.concat(s2).split('').filter((e,i,arr) => arr.indexOf(e) === i).sort().join('')
}

console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty")
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")