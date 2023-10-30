//Complete the solution so that the function will break up camel casing, using a space between words.
//Example

//"camelCasing"  =>  "camel Casing"
//"identifier"   =>  "identifier"
//""             =>  ""

function solution(string) {
  string = string.split('').map((letter) => {
    if (letter === letter.toUpperCase()) {
      letter = ' ' + letter
    }
    return letter
  })
  return string.join('')
}

console.log(solution('camelCase') //should output 'camel Case'
console.log(solution('bigBoatintheSea') //should output 'big Boatinthe Sea'

