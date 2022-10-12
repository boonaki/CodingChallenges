// Please write twin functions that each take in a given value that will only appear once within a given array of a similar structure to the one described above, which will either move that value up one row or down one row in the array, keeping its same horizontal position. It will essentially swap places with whatever was where it needed to be. Just like in Day 2, don't do anything if the given value is already as high or low as it can get.

//given an array of subarrays of same length (grid) and a primitive, primitive only appears once in array
//write two functions

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

console.log(moveUp([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']], 'h'))//[['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']]
console.log(moveDown([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']], 'b'))//[['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']]