// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

//P: Given 3 integer values representing the length of a side of a polygon, all values greater than 0
//R: return boolean if numbers can make a triangle
//E:

function isTriangle(a,b,c){
    //triangle inequality thereom : sum of 2 sides must be greater than other
    //must be true for every combination of sides to be triangle
    if(a + b > c && a + c > b && c + b > a){
        return true
    }else{
        return false
    }
}

console.log(isTriangle(1,2,2))//true
console.log(isTriangle(7,2,2))//false