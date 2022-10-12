//DAY 1
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


// DAY 2
function moveLeft(arr, elem){
    //check if primitive is at array[0], if so return array
    //return the array with the primitive value swapped with the index to the left
    if(arr[0] === elem){
        return arr
    }else{
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === elem){
                let temp = arr[i-1]
                arr[i-1] = arr[i]
                arr[i] = temp
                return arr
            }
        }
    }
}

function moveRight(arr,elem){
    if(arr[arr.length] === elem){
        return arr
    }else{
        for(let i = 0 ; i < arr.length; i++){
            if(arr[i] === elem){
                let temp = arr[i+1]
                arr[i+1] = arr[i]
                arr[i] = temp
                return arr
            }
        }
    }
}

// DAY 3
function aString(arr){
    //declare new variable to store filtered array with elements that include a are kept in
    //store filtered array with elements that dont include a into arr
    //return array.concat(arr)
    let containsA = arr.filter((elem) => elem.includes('a'))
    arr = arr.filter((elem) => !elem.includes('a'))
    return containsA.concat(arr)
}