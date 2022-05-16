//My washing machine uses an amount of water to wash load amount of clothes. You are given a clothes amount of clothes to wash. For each single item of clothes above the load, the washing machine will use 10% more water (multiplicative) to clean.
//For example, if the load is 10, the amount of water it requires is 5 and the amount of clothes to wash is 14, then you need 5 * 1.1 ^ (14 - 10) amount of water.
//My washing machine is an old model that can only handle double the amount of load. If the amount of clothes is more than 2 times the standard amount of load, return 'Too much clothes'. The washing machine also cannot handle any amount of clothes less than load. If that is the case, return 'Not enough clothes'.

//create a function that will check the weight of clothes and give a waning if too much or too little

//P: water, load, clothes both ALWAYS number values, possible fractional values, 
//R: number rounded to 2 decimal places, if too much output 'Too much clothes', if too little output 'Not enough clothes'
//E:

function howMuchWater(water, load, clothes){
    //conditional if clothes > load*2, output 'Too much clothes'
    //conditional if clothes < load, output 'Not enough clothes'
    //else, start calculations
        //calculate water required to wash and return value
    if (clothes > 2 * load) return "Too much clothes";
    if (clothes < load) return "Not enough clothes";
    return +(water * 1.1 ** (clothes - load)).toFixed(2);
}

console.log(howMuchWater(10, 10, 21))//"Too much clothes" 
console.log(howMuchWater(10, 10, 2))//"Not enough clothes" 
console.log(howMuchWater(10, 11, 20))//23.58
console.log(howMuchWater(50, 15, 29))//189.87