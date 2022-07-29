// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

//P: given a single positive number
//R: return the number of times you would need to multply the digits inside of the given number to return the number of times it would take to reach a single digit number (99 -> 9 * 9 -> 81 -> 8 * 1 -> 8 : return 2)
//E:

function persistence(num){
    //declare count variable as 0
    //check if string num length is greater than 1
    //if it isnt: return count variable
    //if it is: split string(number) and reduce array converting each digit and multiplying each digit
        //check if length is === 1
        //if it is: return count, if it isnt increment count and run loop again
    let count = 0
    if(num.toString().split('').length === 1){
        return count
    }else{
        while(num.toString().split('').length !== 1){
            num = num.toString().split('').reduce((acc,curr) => +acc * +curr,1)
            count++
        }
         return count
    }
}

console.log(persistence(39))//3
console.log(persistence(4))//0
console.log(persistence(39))//3
