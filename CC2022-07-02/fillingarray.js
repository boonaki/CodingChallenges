// Write a function that produces an array with the numbers 0 to N-1 in it.

function arr(n){
    let array = []
    for(let i = 0; i < n; i++){
      array.push(i)
    }
    return array
}

console.log(arr(5))[0,1,2,3,4]