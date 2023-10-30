//given a string of words, never empty, always a valid string
//return an array, with the words sorted alphabetically by the last character in each word

function sortLast(str) {
    //split the string by the spaces
    //sort the array, finding the difference between char code of last char for a and b
    //return sorted array
    str = str.split(' ')
    return str.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1), 0)
}

console.log(sortLast('man i need a taxi to ubud'))//['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
console.log(sortLast('what time are we climbing up the volcano'))//['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']