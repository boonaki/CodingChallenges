// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

//P: given a string and a letter, never empty string but may not contain letter
//R: if string has leter, then filter string for letter. else return 0
//E:

function strCount(str, letter){
    if(str.includes(letter)){
        return str.split('').filter((elem) => elem === letter).length
    }else{
        return 0
    }
}

console.log(strCount('Javascript', 'a'))//2
console.log(strCount('Javascript', 'J'))//1
console.log(strCount('Javascript', 'z'))//0

