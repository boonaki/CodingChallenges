// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

//given a string, never empty
//return a string representing the reverse of the given string

function reverse(str){
    //define an empty str
    //loop from length of string to 0
    //push current value into string
    //return str
    let retStr = ''
    for(let i = str.length; i > 0; i--){
        retStr = retStr + str[i-1]
    }
    return retStr
}

console.log(reverse('boonaki'))//'ikanoob'
console.log(reverse('reversed'))//'desrever'
