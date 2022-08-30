// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA you need to return the other complementary side. DNA strand is never empty or there is no DNA at all

//P: given a string of uppercase letters
//R: return the complementary counterpart as a string of capital letters
//E:

function dnaStrand(dna) {
    //create object of complementary DNA as values
    //map dna array and convert each string to object value and return
    let obj = { 'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G' }
    dna = dna.split('')
    return dna.map((elem) => elem = obj[elem]).join('')
}

console.log(dnaStrand("AAAA"))//"TTTT"
console.log(dnaStrand("ATTGC"))//"TAACG"
console.log(dnaStrand("GTAT"))//"CATA"