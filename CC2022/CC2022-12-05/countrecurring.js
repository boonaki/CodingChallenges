// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

//given a string of characters, possibly empty
//return an object with the characters and character count mapped as key/val pairs

function countRecurring(str){
    let obj = {}
    for(const key of str){
        obj[key] ? obj[key]++ : obj[key] = 1
    }
    return obj
}

console.log(countRecurring('boonaki'), {'b': 1, 'o': 2, 'n': 1, 'a': 1, 'k': 1, 'i': 1})
console.log(countRecurring('hello'), {'h': 1, 'e': 1, 'l': 2, 'o': 1})