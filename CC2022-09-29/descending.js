// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

//given a number of type number, of any length
//return the number with the individual digits sorted from greatest to least

function descend(num){
    //conver to string, split, sort by converting into nums, join and convert to number
    return +num.toString().split('').sort((a,b) => +b - +a).join('') 
}

console.log(descend(1998))//9981
console.log(descend(31415957))//97554311
console.log(descend(0))//0