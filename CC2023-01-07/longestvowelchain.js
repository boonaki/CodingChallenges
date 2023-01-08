// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou. 

//given a string, always valid never empty no spaces
//return a number representing the length of the longest substr of vowels

function longestVowelChain(str){
    //define vowel array
    //define length counter and max length
    //loop through string
    //check if is vowel
    //increment length
    //check if length is greater than max
    //if so then max is current
    //else then current is 0
    //return max number
    let vowels = ['a', 'e' , 'i', 'o', 'u']
    let length = 0
    let max = 0
    for (let i = 0; i < str.length; ++i){
        if(vowels.includes(str[i])){
            length++
            if(length > max){
                max = length
            }
        }else{
            length = 0
        }
    }
    return max
}

console.log(longestVowelChain('codewarriors'), 2)
console.log(longestVowelChain('ultrarevolutionariees'), 3)