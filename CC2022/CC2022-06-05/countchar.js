// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

//P: Given a valid string, can be empty
//R: return an object with a list of characters as keys and the counts as values
//E:

function count(str){
    //create empty object
    //loop through string
    //for each character, create new property in obj with key of char and value of 1
    //if key exists, increment value of key
    //return object
    let characters = {}
    string.split('').forEach((char) => {
        characters[char] ? characters[char] += 1 : characters[char] = 1;
    })
    return characters
}

console.log(count("aba"))//{ a: 2, b: 1}
