// Write a function that finds the sum of all its arguments.
// You will need to fill in the syntax to pass arguments into the function

//given an unkown number of integer arguments
//return the sum of all the arguments

function sum(...args){
   //reduce
   return args.reduce((a,c) => a+c)
}

console.log(sum(1))//1
console.log(sum(1,2))//3
console.log(sum(1,5,6))//12
console.log(sum(12,1,1,1,1,1,1))//18
