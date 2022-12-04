// Now that the competition gets tough it will Sort out the men from the boys .

// Men are the Even numbers and Boys are the odd

//given an array on numbers, never empty, pos/neg, always whole
//return a single array with the men and boys concantenated, men being evens sorted in ascending order and boys being odds sorted in descending

function menFromBoys(arr){
    //define even array
    //define odds array
    //loop through arr and push evens and odds to their respective arrays
    //sort both and return as a new set stored in an array
    let evens = []
    let odds = []
    arr = [...new Set(arr)]
    for(let i = 0; i < arr.length; i++){
        arr[i] % 2 ? odds.push(arr[i]) : evens.push(arr[i])
    }
    return evens.sort((a,b) => a-b).concat(odds.sort((a,b) => b-a))
}

console.log(menFromBoys([7,3,14,17]), [14,17,7,3])
console.log(menFromBoys([2,43,95,90,37]), [2,90,95,43,37])