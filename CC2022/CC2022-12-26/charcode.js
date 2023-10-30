// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

//given a string, always valid
//return a number, representing the string as ascII character codes

function calcCharCode(x) {
    //split string
    //map
    //convert each char to charcode
    //join and split by spaces, store copy in new variable
    //map
    //check if element is 7, if so convert to 1
    //return og - copy
    let str = x.split('').map(e => e = e.charCodeAt(0)).join('').split('');
    let copy = str.map(e => {
        if (e === '7') {
            e = '1'
        }
        return e
    })
    return str.reduce((a, c) => a + +c, 0) - copy.reduce((a, c) => a + +c, 0);
}

console.log(calcCharCode('abcdef'), 6)
console.log(calcCharCode('ifkhchlhfd'), 6)
console.log(calcCharCode('aaaaaddddr'), 30)