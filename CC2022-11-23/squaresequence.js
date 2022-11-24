// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

//given 2 number values, representing a starting value and the length of the return array
//return an array that has the squares of the previous number

function squares(start, size){
    //define array with start as first value
    //loop from 0 to size
    //add the square of start to start
    //push start into array
    //return
    if(size < 1){
        return []
    }
    let arr = [start]
    for(let i = 1; i < size; i++){
        start = start*start
        arr.push(start)
    }
    return arr
}

console.log(squares(2, 5))//[2,4,16,256,65536]
console.log(squares(3, 3))//[3,9,81]