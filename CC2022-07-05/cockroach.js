// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

//P: given a real number representing speed (km/h)
//R: return a whole (rounded) number representing speed (cm/s)
//E:

function speedConversion(speed){
    //cm/s === km/h * 27.77777778
    //round value and return
    return Math.floor(speed * 27.777778)
}

console.log(speedConversion(1.08))//30