// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

//given a string of text and a character, where the character will always be a string of length 1, or empty
//return the first string with each character mutated to the given character

function mutateString(str, char){
    if(char === ''){
        return ''
    }
    return str.split('').map(e => e = char).join('')
}

console.log(mutateString('abc', 'z'), 'zzz')
console.log(mutateString('boon', 'b'), 'bbbb')