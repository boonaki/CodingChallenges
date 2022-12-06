// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

//given two strings, one representing a unique input and the other representing a string that has the unique input somewhere inside
//return a number repsenting the number of characters in the unique input that matches a character in the bigger string

function jewelsInStones(jewels, stones){
    //init count to 0
    //split jewels
    //split and loop through stones
    //filter out non-jewels
    //return legnth
    jewels = jewels.split('')
    return stones.split('').filter((e) => jewels.includes(e)).length
}

console.log(jewelsInStones('aA', 'aAAbbbbb'), 3)
console.log(jewelsInStones('z', 'ZZZZ'), 0)