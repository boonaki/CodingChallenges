// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

//P: given an array of strings
//R: return the same array, but sorted by string lengths smallest to largest
//E:

function sortString(array){
    //sort array using a.length and b.length
    return array.sort((a,b) => a.length - b.length)
}

console.log(sortString(["Telescopes", "Glasses", "Eyes", "Monocles"]))//["Eyes", "Glasses", "Monocles", "Telescopes"]
console.log(sortString(["Longer", "Longest", "Short"]))//["Short","Longer","Longest"]