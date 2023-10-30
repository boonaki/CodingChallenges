// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

//P: given a string, string will contain 1 number or be empty, numbers will only be consecutive, numbers will be at random places
//R: return the same string but ordered consecutively in respect to the numbers inside string
//E: 

function order(words){
    //declare arr = string to array with split(" ")
    //words = arr
    //loop through words and loop through each character in word
    //if char === type of Number
    //remove characters and push only numbers
    //compare numbers in arr and replace in new array
    let arr = []
    words = words.split(" ")
    words.forEach((word) => {
      word.split("").forEach((char) => {
        if(char == Number(char)){
          arr.push(char)
        }
      })
    })
    
    arr.sort((a,b) => a-b)
    arr.map((num, idx) => {
      words.forEach((word) => {
        if(word.includes(num)){
          arr.splice(idx, 1, word)
        }
      })
    })
    return arr.join(" ")
}

console.log(order("is2 Thi1s T4est 3a"))// "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))// "Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order(""))//""