// Write a function that adds the length of the string to each word in a string

//P: given a string, never empty, words will always be separated with a space
//R: return an array with each word in the string having their corresponding length attached
//E:

function addLength(str){
    //split string by space
    //map elem, concatenating word with word length and return
    return str.split(' ').map((elem) => elem = `${elem} ${elem.length}`)
}

console.log(addLength("apple ban"))//["apple 5", "ban 3"]
console.log(addLength("easy peasy lemon"))//["easy 4", "peasy 5", "lemon 5"]
console.log(addLength("squeezy"))//["squeezy 7"]