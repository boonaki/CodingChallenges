// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0. 

//given a string, could be empty though always valid
//return the longest substr that is a palindrome

function longestPalindrome(s) {
    //grab length of string and store in variable
    //while loop for length greater than 0
    //loop for length of string
    //splice string from i to i + length
    //check if spliced string is palindrome, and return length if so
    //if not, decrement length
    //if never found, return 0
    let l = s.length;
    while (l > 0) {
        for (let i = 0; i < s.length - l + 1; i++) {
            let str = s.slice(i, i + l);
            if (isPalindrome(str)){
                return str.length;
            }
        }
        l--;
    }
    return 0;
}

function isPalindrome(str) {
    let rev = str.split('').reverse().join('')
    return rev === str
}

console.log(longestPalindrome('a'))//1
console.log(longestPalindrome('baabcd'))//3
console.log(longestPalindrome('boonaki'))//2
console.log(longestPalindrome('are you ready for tacocat'))//7