// You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. The street looks something like this:
// Street

// 1|   |6
// 3|   |4
// 5|   |2
//   you

// Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2. 

//given 2 numbers representing an address and the length of the street, always positive and whole, can be of arbitrary length
//return the house number on the other side of the street

function otherSide(addy, n){
    //multiply n by 2
    //add one to addy
    //return difference
    return n*2 - addy+1
}

console.log(otherSide(2,3))//5
console.log(otherSide(1,3))//6
console.log(otherSide(3,5))//8