// Raymond loves cycling.

// Because Raymond knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Raymond will drink, rounded to the smallest value.

//P: given a integer value, representing time in hours
//R: return the number of liters that will raymond will drink, rounded to whole number
//E:

function litres(time){
    //multiply litres by time
    //return rounded number
    return Math.floor(time * .5)
}

console.log(litres(3))//1
console.log(litres(6.7))//3
console.log(litres(11.8))//5