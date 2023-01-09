/*
Translate the provided string to pig latin by following the rules below:
- For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g  
  - "pig" = "igpay"
- For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g  
  - "glove" = "oveglay"
-  For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
  - "explain" = "explainway”
*/

//given a string, always valid, never empty
//return a string representing the pig latin translation of the given word

function pigLatin(str) {
    //check if first is a vowel, if it is then concat way onto str and return str
    //if not then define current count and split string and store in new variable and run for loop
    //define vowel index
    //once current is a vowel, then define the index to make cuts
    //slice string together then concat 'ay' to the string and return
    if(str[0].match(/[aeiou]/gi)){
        return str.concat('way')
    }
    let vowelIdx = 0
    
    for(let i = 0; i < str.length; i++){
        if(str[i].match(/[aeiou]/gi)){
            vowelIdx = i
            break;
        }
    }

    return str.slice(vowelIdx) + str.slice(0, vowelIdx) + 'ay'
}

console.log(pigLatin('pig'), 'igpay')
console.log(pigLatin('glove'), 'oveglay')
console.log(pigLatin('explain'), 'explainway')