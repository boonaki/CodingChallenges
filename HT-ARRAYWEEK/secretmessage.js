function day1(arr1,arr2){
    //loop through array
    //loop through each letter,
    //if letter is not equal to letter in arr2 then return false
    //return true
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr1[i].length; j++){
            if(arr1[i][j] !== arr2[i][j]){
                return false
            }
        }
    }
    return true
}