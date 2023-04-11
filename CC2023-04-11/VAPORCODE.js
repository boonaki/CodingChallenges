// Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

// Note that spaces should be ignored in this case.

//given a string of text, containing spaces, or latin chars
//return string with all characters separted by 2 spaces, with spaces ignored

function vaporcode(str) {
    //uppercase then split by character
    //join by 2 spaces
    return str.toUpperCase().split(' ').join('').split('').join('  ')
}

console.log(vaporcode('boonaki'), 'B  O  O  N  A  K  I')