// Create a function which translates a given DNA string into RNA.

//Given a string representing a DNA group, always valid, no funky inputs
//return the string converted into an RNA string

function dnaConvert(dna) {
    //split and loop through group
    //if current letter is equal to 'T', then replace with 'U'
    //return string
    dna = dna.split('')
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'T') {
            dna[i] = 'U'
        }
    }
    return dna.join('')
}

console.log(dnaConvert('GCAT'))//'GCAU'
console.log(dnaConvert('TTTT'))//'UUUU'
console.log(dnaConvert('GACCGCCGCC'))//'GACCGCCGCC'