// Given an array of 4 integers
// [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

// For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

//given an array of 4 numbers, always whole but can be less than 0
//return a string representing the slope of the 4 points (y2-y1/x2-x1). return "undefined" if dividing by 0

function findSlope(points){
    //define y (y2-y1)
    //define x (x2-x1)
    //check if x is equal to 0, if it is return undefined
    //return y / x
    let y = points[3] - points[1];
    let x = points[2] - points[0];
    if(x === 0) return "undefined"
    return (y/x).toString()
}

console.log(findSlope([19,3,20,3]), "0")
console.log(findSlope([2,7,4,-7]), "-7")
console.log(findSlope([-10,6,-10,3]), "undefined")
