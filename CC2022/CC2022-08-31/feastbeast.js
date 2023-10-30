// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

//P: given 2 strings of atleast 2 characters each
//R: return a boolean if first and last characters of dish and beast same
//E:

function feast(beast,dish){
    return beast.slice(0,1) === dish.slice(0,1) && beast.slice(-1) === dish.slice(-1)
}

console.log(feast('chickadee', 'chocolate cake'))//true
console.log(feast('chicken', 'cooked chicken'))//true
console.log(feast('brown bear', 'bear claw'))//false