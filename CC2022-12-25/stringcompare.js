// Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

// To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().

//given 2 variables, possibly being of type string and type number
//return a boolean if they are the same character and false if not, regardless of data type

function compare(a,b) {
    return a == b;
}

console.log(compare('1', 1), true);
console.log(compare(0, '1'), false);
console.log(compare(12,12), true);