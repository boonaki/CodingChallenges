// Task
// Write function potatoes with
//     int parameter p0 - initial percent of water-
//     int parameter w0 - initial weight -
//     int parameter p1 - final percent of water -
// potatoesshould return the final weight coming out of the oven w1 truncated as an int.

//given 3 numbers, representing initial percent, initital weight and final percent
//return a number that represents the final weight

function potatoes(p0, w0, p1){
   //find diff between 100 and p0
   //find product between diff and w0
   //find diff between 100 and p1
   //divide product and second diff
   //floor and return
   return Math.floor(w0 * (100-p0) / (100-p1));
}

console.log(potatoes(82, 127, 80))//114
console.log(potatoes(93, 129, 91))//100