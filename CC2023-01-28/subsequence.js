// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

//given two strings, s and t, where t is always greater length than s
//return a boolean if s is a subsequence of t

function isSubseq(s,t){
    //define t length
    //define return count number as 0
    //loop through t
    //check if s[return count] is equal to current letter in t
    //if it is then increment return count
    //return eval of return count and s.length

    let tlength = t.length;
    let seqNum = 0
    for(let i = 0; i < tlength; i++) {
        if (s[seqNum] === t[i]){
            seqNum++
        }
    }
    return seqNum === s.length
}

console.log(isSubseq("abc", "ahbgdc"), true);
console.log(isSubseq("axc", "ahbgdc"), false);