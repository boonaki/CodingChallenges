// Receiving a sentence, a word in the sentence and a replacement for that word as arguments, perform a search and replace on the sentence using the arguments provided and return the new sentence. E.g 

//given 3 strings, one representing a string, the other representing the word to change and then the word to change with
//return the original string with the word replaced with newWord

function searchReplace(str, word, newWord) {
    //split str by spaces
    //map str and check if word is equal to word, if so then change current to new word and return
    //join and return string
    return str.split(' ').map(e => e === word ? e = newWord : e).join(' ')
}

console.log(searchReplace("this is a sentence", "a", "the"))//"this is the sentence"
console.log(searchReplace("look at my horse", "horse", "doors"))//"look at my doors"