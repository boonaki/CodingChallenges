//given an array o booleans, and a logical operator in type string
//return a boolean based on sequentially applying the operator to the values

function logicalCalc(array, op) {
    //check operator
    //join bools with corresponding operator
    //return check from string with eval method
    if (op === 'AND') {
        array = array.join(' && ')
    } else if (op === 'OR') {
        array = array.join(' || ')
    } else {
        array = array.join(' ^ ')
    }
    return eval(array) ? true : false
}

console.log(logicalCalc([true, true, true, false], 'AND'))//false
console.log(logicalCalc([true, true, true, false], 'OR'))//true