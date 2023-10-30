//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). 

function solution(str, ending){
    let testStr = str.split('').splice(-ending.length, ending.length)
    return testStr.join('') === ending
}

console.log(solution('abcde', 'cde')) //should output true
console.log(solution('abcde', 'abc')) // should output false