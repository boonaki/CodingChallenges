// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

//given two strings, always valid, can be different length
//return a boolean if the strings are isomorphic

function isIsomorphic(s,t){
    //for loop
    //check if the index of the current in s, starting at the next position is not equal to the same in t
    //return false if not the same
    //end of loop return true
    
    for (let i = 0; i < s.length; i++) {

        if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) {
    
            return false;
    
        }
    
    }
    
    return true;
}

function isIsomorphicTwo(s,t){
    // let hash = {}
    // for (let i = 0; i < s.length; i++){
    //     hash[s[i]] = t[i];
    // }

    // for (let j = 0; j < s.length; j++){
    //     if(hash[s[j]] !== t[j]){
    //         return false;
    //     }
    // }
    
    // return new Set(...Object.values(hash)).size === 
    // const hash1 = {}
    // const hash2 = {}
    // for(let idx = 0; idx < s.length; idx++){
    //     console.log(hash1,hash2)
	// 	if(hash1[s[idx]] !== hash2[t[idx]]) return false
    //     hash1[s[idx]] = idx
    //     hash2[t[idx]] = idx          
    // }
    // return true
}

console.log(isIsomorphicTwo("bbbaaaba", "aaabbbba"), false)
console.log(isIsomorphicTwo('foo', 'bar'), false)
console.log(isIsomorphicTwo('paper', 'title'), true)
console.log(isIsomorphicTwo('badc', 'baba'), false)