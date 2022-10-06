function day4(str){
    //define count for back spaces to then be placed in the front once reversed
    //define count for front spaces to then be placed in the back once reversed
    //loop through string
    //if string is space, then increment frontcount and break once a character has been hit
    //loop through string but backwards and do same as above
    //trim and split string and reverse and join
    //add repeat space back amount of times then concat with string then repeat space front amount of times and return string
    let back = 0
    let front = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] === ' '){
            front++
        }else{
            break;
        }
    }
    for(let i = str.length-1; i > 0; i--){
        if(str[i] === ' '){
            back++
        }else{
            break;
        }
    }
    str = str.trim().split(' ').map((word) => word = word.split('').reverse().join('')).reverse().join(' ')
    return "|"+" ".repeat(back)+str+" ".repeat(front)+'|'
    
}

console.log(day4("   The white space at the beginning of this string doesn't match the whitespace at the end. "))//" .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   "