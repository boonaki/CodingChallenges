// You have to write a function that accepts three parameters:

//     cap is the amount of people the bus can hold excluding the driver.
//     on is the number of people on the bus excluding the driver.
//     wait is the number of people waiting to get on to the bus excluding the driver.

// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

//P: given 3 whole number values representing a max-capacity, number of people and number of people waiting
//R: return a whole number representing the number of people that will be left waiting after filling bus
//E:

function enough(cap, on, wait){
    // add on and waiting passengers
    // from total of passengers, check if total is bigger than cap, if it is than subtract total from cap and return. if not return 0
    on = on + wait
    return cap >= on ? 0 : on - cap
}

console.log(enough(10,5,5))//0
console.log(enough(100,60,50))//10
console.log(enough(20,5,5))//0