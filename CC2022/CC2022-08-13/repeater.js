//Write a function that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

//P: given a string value and number value, never empty and always whole
//R: return that string repeated that n number of times
//E:

function repeater(string, n){
    //break string into array and foreach index of, add string into new array until idx === n
    let array = []
    for(let i = 0; i < n; i++){
      array.push(string)
    }
    return array.join('')
}

console.log('hi', 5)//"hihihihihi"
console.log('wub', 3)//"wubwubwub"