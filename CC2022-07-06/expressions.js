// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained

//P: given three integer values, all real and positive numbers
//R: return the largest value obtained through all combintations of expressions using *,+ and ()
//E:

function expressions(a,b,c){
    //store each expression value into array
    //return Math.max in array
    let arr = []
    arr.push(a * b * c)
    arr.push(a + b + c)
    arr.push(a + b * c)
    arr.push((a + b) * c)
    arr.push(a * (b + c))
    arr.push((a * b) + c)
    arr.push(a + (b * c))
    arr.push(a * b + c)
    return Math.max(...arr)
}

console.log(expressions(1,2,3))//9
console.log(expressions(2,1,1))//4