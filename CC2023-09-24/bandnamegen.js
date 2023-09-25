// My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:
// "dolphin" -> "The Dolphin"
// However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:
// "alaska" -> "Alaskalaska"
// Complete the function that takes a noun as a string, and returns her preferred band name written as a string.

//given a string, always valid never empty
//return a specific string depending on if the first and last letters are equal

function generateBandName(name){
   //check if first and last char of name are equal
   //if not then return a new string with first letters capitalized
   //if yes then duplicate string, remove first letter and concatenate them

   if(name[0] === name[name.length-1]){
      const dupe = name.slice(1);
      const moddedString = name.charAt(0).toUpperCase() + dupe;
      return moddedString.concat("", dupe)
    }else{
      let moddedString = name.charAt(0).toUpperCase() + name.slice(1);
      return `The ${moddedString}`
    }
}

console.log(generateBandName('knife'))//The Knife
console.log(generateBandName('tart'))//tartart
console.log(generateBandName('sandles'))//Sandlesandles
