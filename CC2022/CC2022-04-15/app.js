//Given 2 strings, a and b, return a string of the form short+long+short, 
// with the shorter string on the outside and the longer string on the inside.
//  The strings will not be the same length, but they may be empty ( zero length ).

// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

function solution(a, b){
    if(a.length < b.length){
      return `${a}${b}${a}`
    }else{
      return `${b}${a}${b}`
    }
}

console.log(solutions('1', '22')) //should output '1221'
console.log(solutions('Me', 'Soon')) //should output 'MeSoonMe'
console.log(solutions('100', '1')) //should output '11001'