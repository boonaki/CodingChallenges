// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

//given 2 numbers, a number and a power
//return a number representing the number multiplied by itself 'power' times

function power(num, power){
    //define total variable
    //loop from 1 to power
    //redefine total as total * num
    //return total
    let total = 1
    for(let i = 1; i <= power; i++){
        total = total * num
    }
    return total
}

console.log(power(3,2))//9
console.log(power(10,2))//100
console.log(power(10,0))//1