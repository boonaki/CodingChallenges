// We want to know the index of the vowels in a given word, 
// for example, there are two vowels in the word super (the second and fourth letters).

// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)


// So given a string "super", we should return a list of [2, 4].

function vowelIndices(word){
    //create array of vowels
    //create return array
    //split array --> foreach letter and index in array
        //check if letter is in array(arrvowel.indexof(letter) >= 0)
            //push index to return array
    //return return array
    let arryOfVowels = ['a', 'e', 'i', 'o', 'u', 'y']
    let endArr = []
    word = word.toLowerCase()
  
    word.split('').forEach((letter, idx) => {
        if(arryOfVowels.indexOf(letter) >= 0){
            endArr.push(idx)
        }
    })
    return endArr.map((num) => num + 1)
            
}

console.log(vowelIndices("mmm")) //should equal []
console.log(vowelIndices("apple")) //should equal [1, 5]
console.log(vowelIndices("super")) //should equal [2, 4]
console.log(vowelIndices("supercalifragilisticexpialidocious")) //should equal [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]