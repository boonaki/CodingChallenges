// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

//P: given a valid string
//R: return a boolean if the string is an isogram or not
//E:

function isIsogram(str){
    //make lowercase and split string into array
    //loop through array
    //if index of character is not equal to lastindex of the character, return false
    str = str.toLowerCase().split('')
    for(let i = 0; i < str.length; i++){
      if(str.indexOf(str[i]) !== str.lastIndexOf(str[i])){
        return false
      }
    }
    return true
}

console.log(isIsogram('aba'))//false
console.log(isIsogram('Dermatoglyphics'))//True
console.log(isIsogram('moOse'))//false
