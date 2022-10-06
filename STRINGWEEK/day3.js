
//given a string, of any case
//return the string with the key characters replaced with a " ", key is case sensitive

function decode(str){
    let key = ['S', 'p', 'a', 'c', 'e']
    for(let i = 0 ; i < str.length; i++){
        if(key.includes(str[i])){
            str = str.replace(str[i], " ")
        }
    }
    return str
}

console.log(decode('TSEpXaTc!e!'))