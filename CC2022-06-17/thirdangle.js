// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

//P: Given two number values representing angles of a triangle
//R: return the value of the third angle
//E:

function otherAngle(a,b){
    //180 degrees in a triangle
    return 180 - (a+b)
}

console.log(otherAngle(30,60))//90
console.log(otherAngle(60,60))//60
console.log(otherAngle(10,20))//150
