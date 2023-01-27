//Write a function that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string. 

//given a string, always valid
//return a string with the vowels replaced with the current index that they sit at

function vowel2Index(str){
    //split and map
    //convert character to index
    //return joined array
    return str.toLowerCase().split('').map((e,i) => {
        if(e.match(/[AEIOU]/gi)){
            e = i + 1;
        }
        return e
    }).join('')
}

console.log(vowel2Index('this is my string'), 'th3s 6s my str15ng')