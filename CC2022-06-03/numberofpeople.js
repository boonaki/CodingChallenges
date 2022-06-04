// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

//P: given an array, with arrays for elements, the first element being the number of people that get into the bus and the number of people that get off of the bus
//R: return the number of people left after all of the stops
//E:

function busStops(people){
    //create variable for loop
    //loop through the array
    //then loop through each array within the array and reduce the value to a difference
    //add reduced value to variable
    let sum = 0
    busStops.forEach((arr) => {
        sum += arr.reduce((a,b) => a-b)
    })
    return sum
}

console.log(busStops([[10,0],[3,5],[5,8]]))//5
console.log(busStops([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))//17
