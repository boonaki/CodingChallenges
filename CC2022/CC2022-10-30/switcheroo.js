// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

//given a string, never empty, only contains a, b and c's
//return the string with the a's and b's swapped

function switcheroo(str){
    //spread string into array
    //map and check if current char is a or b and swap
    //join and return
    return [...str].map(e => e === 'a' ? e = 'b' : e === 'b' ? e = 'a' : e).join('')
}

console.log(switcheroo('abc'))//'bac'
console.log(switcheroo('aaccbabccbb'))//'bbccabaccaa'