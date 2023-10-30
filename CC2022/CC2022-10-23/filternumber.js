// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Your task is to return a number from a string. You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

//given a string, never empty, always typeof string
//return the numbers filtered joined as a number

function filterString(str){
    //split str
    //run filter loop and reassign to str
    //each iteration, check if current value is a number
    //if cv is number, then return that value
    //join, convert to number and return
    str = str.split('').filter((e) => {
        if(parseInt(e) == e){
          return e
        }
    }).join('')
    return +str
}

console.log(filterString('123'))//123
console.log(filterString('j0sh'))//0
console.log(filterString('abcde5f9'))//59
