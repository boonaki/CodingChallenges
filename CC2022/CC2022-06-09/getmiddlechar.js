// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

//P: Given a valid string
//R: return the middle character if the length is odd and return middle 2 characters if even
//E:

function getMiddle(str){
    //split string
    //if str.length % 2 !== 0
        //filter if idx === math.floor(str.length / 2) and join
    //else
        //filter if idx === math.floor(str.length / 2) or math.floor(str.length / 2) + 1 and join
    str = str.split('')
    if(str.length % 2 !== 0){
        return str.filter((elem, idx) => idx === Math.floor(str.length/2)).join('')
    }else{
        return str.filter((elem, idx) => idx === Math.floor(str.length/2 - 1) || idx === Math.floor(str.length/2)).join('')
    }
}

console.log(getMiddle('aba'))//b
console.log(getMiddle('abab'))//ba
console.log(getMiddle('middle'))//dd