// Create a method to see whether the string is ALL CAPS.

//given a valid string, could be empty but is a new method on the string prototype
//return a boolean if it is or isnt uppercase

String.prototype.isUpperCase = function() {
    //split this and store in variable
    //join str and check if string is equal to joined string to uppercase
    let str = this.split('')
    return str.join('') === str.join('').toUpperCase()
}

console.log('C'.isUpperCase())//true
console.log('Im UP'.isUpperCase())//false
console.log(''.isUpperCase())//true