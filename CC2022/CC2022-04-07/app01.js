// Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern

function pattern(n){
    let output = ''
    for(let i = 1; i <= n; i++){
        if(i === 1){
            output += '1\n'
        }else if(i === n){
            output += `1${calcStars(i)}${i}`
        }else if(i > 1){
            output += `1${calcStars(i)}${i}\n`
        }
    }
    return output
}
  
function calcStars(count){
    let out = []
    for(let i = 1; i < count; i++){
        out.push('*')
    }
    return out.join('')
}

console.log(pattern(3))
/* should equal

1
1*2
1**3

*/

console.log(pattern(10))
/* should equal

1
1*2
1**3
1***4
1****5
1*****6
1******7
1*******8
1********9
1*********10

*/