//Write a function that checks whether or not a given string is a palindrome

//given a string, always valid never empty
//return a boolean checking if the given word is a palindrome

function isPalindrome(str){
    //reduce to reverse and compare with original and return comparison
    return [...str].reduce((a,c) => c+a) === str
}

console.log(isPalindrome('boon'))//false
console.log(isPalindrome('racecar'))//true