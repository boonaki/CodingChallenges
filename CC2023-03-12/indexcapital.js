// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

//     capitalize("abcdef",[1,2,5]) = "aBCdeF"
//     capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.

// The input will be a lowercase string with no spaces and an array of digits.

//given a string and an array of integers, each int representing an index to capitalize, always valid inputs
//return the string with the correct characters capitalized

function capitalize(s,arr){
    //split string
    //run map, check if i is included in arr
    //if so capitalize
    //return joined string array
    return s.split('').map((e,i) => arr.includes(i) ? e.toUpperCase() : e).join('')
}

console.log(capitalize("abcdef", [1,2,5]), "aBCdeF")
console.log(capitalize("abracadabra",[2,6,9,10]),'abRacaDabRA')
console.log(capitalize("indexinglessons",[0]),'Indexinglessons')