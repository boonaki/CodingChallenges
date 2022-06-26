// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

//P: given an array of numbers, pos/neg, all whole numbers
//R: return a sum with the highest and lowest numbers removed from the array
//E:

function sumArray(arr){
    //sort array from least to greatest
    //slice array at position 1 to -1
    //reduce array and return
    if(arr){
        arr.sort((a,b) => a-b)
        return arr.slice(1,-1).reduce((acc,curr) => acc + curr,0)
    }else return 0
}

console.log(sumArray([]))//0
console.log(sumArray([3]))//0
console.log(sumArray([3,5]))//0
console.log(sumArray([ 6, 2, 1, 8, 10 ]))//16