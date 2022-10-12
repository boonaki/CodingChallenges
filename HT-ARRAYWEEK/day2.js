// So it turns out that some of the information I stored ever-so-safely in arrays just isn't looking right. I'm not going to be happy until it feels right, you know what I mean? Could you help me rearrange things a bit?

// I need twin functions, a function that swaps a given primitive value in a given 1-dimensional array to an index to the left, and another that swaps it to the right.

// Some things to note:

//     If the given value is on the edge of the array and can't move in that direction, don't move it.
//     The given primitive value will only occur once in the array
//     The array passed in should be mutated by this function. Scandalous, I know.

//need two functions
//for first: move left
//given an array and a primitive value

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

//for second: move right
//given an array and a primitive value
//return an array with the given value moved 1 to the right

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

myArray = ['abc', 'xyz', 1, 2, 'Hey!']
myArray = moveLeft(myArray, 'Hey!')
console.log(moveRight(myArray, 'Hey!'))