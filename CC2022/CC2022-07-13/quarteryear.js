// Write a function that gives which quarter of the year that the month (in integer value) is in

//P: given an integer value 1-12
//R: return the quarter value 1-4 (int) for the corresponding month
//E:

function quarter(month){
    //set month / 3 and round up to nearest value
    return Math.ceil(month / 3)
}

console.log(quarter(3))//1
console.log(quarter(8))//3
console.log(quarter(4))//2
console.log(quarter(10))//4