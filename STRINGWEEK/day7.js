// create a function that swaps each letter of the alphabet for its opposite. A letter's opposite is one that, if the alphabet were flipped Z-A, would be the same number of letters in, and which would also have the opposite case.

//given a string of characters, can contain numbers, never empty
//return a string with the letters swapped with their opposite, uppercase <-> lowercase, front to end

function letterSwap(str){
    //split string and map
    //if charcode of is between 65 and 91 (lowercase)
    //subtract charcode of current character from charcode of 'a'
    //make current char = to the charcode of Z - difference
    //else if charcode is uppercase
    //subtract charcode of current character minus charcode of A
    //make current char = to the charcode of z - difference
    //return joined string
    str = str.split('').map((char) => {
        let cc = char.charCodeAt(0)
        //if lowercase
        if(cc > 96 && cc < 123){
            let diff = cc - 'a'.charCodeAt(0)
            char = String.fromCharCode('Z'.charCodeAt(0) - diff)
        }else if(cc > 64 && cc < 91){
            let diff = cc - 'A'.charCodeAt(0)
            char = String.fromCharCode('z'.charCodeAt(0) - diff)
        }
        return char
    })
    return str.join('')
}

console.log(letterSwap('vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'))//'Example: 0 number or punctuation changes'