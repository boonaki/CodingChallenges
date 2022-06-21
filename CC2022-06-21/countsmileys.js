// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

//     Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
//     A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
//     Every smiling face must have a smiling mouth that should be marked with either ) or D

// No additional characters are allowed except for those mentioned. 

//P: given an array of emoticons, could be empty array
//R: return the count of smileys, or if empty return 0
//E:

function countSmileys(arr){
    //loop through each element
    //split element and check length
    //check if elem[0] is valid
    //check if elem[1] is valid
    //if both valid increment count
    //if length of elem is === 3
    //check if elem[0], elem[1] and elem[2] are valid and increment count
    console.log(arr)
    let count = 0
    arr.forEach((elem) => {
        elem = elem.split('')
        if(elem.length === 2){
            if(elem[0] === ':' || elem[0] === ';'){
                if(elem[1] === ')' || elem[1] === 'D'){
                    count++
                }
            }
        }else if(elem.length === 3){
            if(elem[0] === ':' || elem[0] === ';'){
                if(elem[1] === '-' || elem[1] === '~'){
                    if(elem[2] === ')' || elem[2] === 'D'){
                        count++
                    }
                }
            }
        }
    })
    return count
    
}

console.log(countSmileys([':D',':~)',';~D',':)']))//4
console.log(countSmileys([':)',':(',':D',':O',':;']))//2