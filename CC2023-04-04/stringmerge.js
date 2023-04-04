// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

//given 2 valid strings and a letter that is always inside the passed strings
//return a string representing the 2 strings merged together at the point where the letter is

function mergeStrings(str1, str2, letter) {
    //find index of letter in string1
    //slice string from 0 to the index of letter in string1
    //slice string from index of letter to length of string2
    //return string1 concat string2
    str1 = str1.slice(0, str1.indexOf(letter))
    str2 = str2.slice(str2.indexOf(letter), str2.length)
    return str1.concat(str2)
}

console.log(mergeStrings("person", "here", "e"), "pere")
console.log(mergeStrings("apowiejfoiajsf", "iwahfeijouh", "j"), "apowiejouh")
console.log(mergeStrings("coding", "anywhere", "n"), "codinywhere")