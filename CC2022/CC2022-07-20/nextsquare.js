//Write a function that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer. If integer is not a perfect square, return -1

//P: given a single positive whole number
//R: Return the next perfect square after the given integer, unless given integer is not a perfect square itself, then return -1
//E:

function nextPerfectSquare(num){
    //check if num is a perfect square (sqrt of num * sqrt of num === num)
    //if it is, add one and loop
    //while the num is not a perfect square
    //increment num
    //return num
    //else return -1
    let squareRoot = Math.floor(Math.sqrt(num))
    if(squareRoot * squareRoot === num){
        num++
        while(Math.floor(Math.sqrt(num)) * Math.floor(Math.sqrt(num)) !== num){
            num++
        }
        return num
    }else{
        return -1
    }
}

console.log(nextPerfectSquare(121))//144
console.log(nextPerfectSquare(625))//676
console.log(nextPerfectSquare(155))//-1
