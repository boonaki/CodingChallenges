//Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    x = x.toLowerCase()
    return x === x.split('').reverse().join('')
}

console.log(isPalindrome('a')) // should output true
console.log(isPalindrome('')) // should output true
console.log(isPalindrome('racecar')) // should output true
console.log(isPalindrome('hello')) // should output false
console.log(isPalindrome('eat')) // should output false
console.log(isPalindrome('')) // should output true