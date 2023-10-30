// Write these two functions and a high-order function oper(fct, s)
//where fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)

//P: given a function name and a string
//R: return the correct string manipulated based on the given function
//E:

function vertMirror(strng) {
    //map each element, reversing each string and return joined mapped string
    return strng.map((str) => {
        return str.split('').reverse().join('')
    }).join('\n')
}
function horMirror(strng) {
    //reverse, join with line break and return string
    return strng.reverse().join('\n')
}
function oper(fct, s) {
    //split string and call given function with split string
    s = s.split('\n')
    return fct(s)
}

console.log(oper(vertMirror, 'hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu'), "\n")//"QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw"
console.log(oper(vertMirror, 'IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx'), "\n")//"EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP"
console.log(oper(horMirror, 'lVHt\nJVhv\nCSbg\nyeCt'), "\n")//"yeCt\nCSbg\nJVhv\nlVHt"
console.log(oper(horMirror, 'njMK\ndbrZ\nLPKo\ncEYz'), "\n")//"cEYz\nLPKo\ndbrZ\nnjMK"