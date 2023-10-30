// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

//given an array of strings, each string consisiting of a random number of a single character
//return an array, the length of the strings will each be the same length, determined by the average length of all

function avgLength(arr) {
    // map array and change each string to their length, then store the returned array into a new variable to represent the avg
    //reduce the array, then divide by the length of the array then round
    //map original array
    //check if the length is less than the average
    //of which we will repeat the character (avg - length) times
    //if length is greater than average
    //slice from 0 to avg
    //return
    let avg = Math.round(arr.map(e => e.length).reduce((a, c) => a + c) / arr.length)
    return arr.map(word => {
        if (word.length < avg) {
            word = word + word[0].repeat(avg - word.length)
        } else if (word.length > avg) {
            word = word.slice(0, avg - word.length)
        }
        return word
    })
}

console.log(avgLength(['aa', 'bbb', 'cccc']))//['aaa', 'bbb', 'ccc']