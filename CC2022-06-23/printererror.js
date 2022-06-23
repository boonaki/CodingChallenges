// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m. The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a... Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function, which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from a to z.

//P: Given a string of roman characters, a-z
//R: return a string as a fraction with the length as denom and number of printer errors as numerator (error is any character from n-z)
//E:

function printerError(str){
    //create array of letters n-z
    //split string and filter any element that is included in the errors array
    //return fraction
    let arr = ['n','o','p','q','r','s','t','u','v','w','x','y','z']
    let filteredString = str.split('').filter((char) => arr.includes(char))
    return `${filteredString.length}/${str.length}`
}

console.log(printerError("aaabbbbhaijjjm"))//"0/14"
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))//"8/22"