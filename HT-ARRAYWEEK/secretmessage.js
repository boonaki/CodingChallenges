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

// DAY 4

//for first: move up
function moveUp(arr, prim){
    //find indexof subarray that includes the element
    //if indexof subarray is equal to 0 return array
    //loop through array
    //if index is equal to indexof element
    //let upArray = i-1
    //find indexof prim in subarray
    //store value of uparray prim index in temp
    //let primindex of uparray = prim
    //let primindex of array = temp
    //return array
    for(let i = 0; i < arr.length; i++){
        if(arr[i].includes(prim)){
            if(i === 0){
                return arr
            }else{
                let primidx = arr[i].indexOf(prim)
                let upArr = i-1
                let temp = arr[upArr][primidx]
                arr[upArr][primidx] = arr[i][primidx]
                arr[i][primidx] = temp
                return arr
            }
        }
    }
}

//for second: move down
function moveDown(arr, prim){
    //find indexof subarray that includes the element
    //if indexof subarray is equal to 0 return array
    //loop through array
    //if index is equal to indexof element
    //let downArray = i-1
    //find indexof prim in subarray
    //store value of downarray prim index in temp
    //let primindex of downarray = prim
    //let primindex of array = temp
    //return array
    for(let i = 0; i < arr.length; i++){
        if(arr[i].includes(prim)){
            if(i === arr.length-1){
                return arr
            }else{
                let primidx = arr[i].indexOf(prim)
                let downArr = i+1
                let temp = arr[downArr][primidx]
                arr[downArr][primidx] = arr[i][primidx]
                arr[i][primidx] = temp
                return arr
            }
        }
    }
}


// DAY 5

function shuffle(arr){
    //loop through array
    //find random value within random array
    //store value and return
    return arr.map((a) => {
        for(let i = 0; i < a.length; i++){
            let rO = Math.floor(Math.random() * arr.length)
            let rI = Math.floor(Math.random() * a.length)
            let temp = a[i]
            a[i] = arr[rO][rI]
            arr[rO][rI] = temp
        }
        return a
    })
}

console.log(shuffle([[1,2,3],[4,5,6],[7,8,9]]))//[[8,3,5],[2,4,9],[6,7,1]]