// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

//P: given a single whole value
//R: return the sum of the row of odd numbers shown in the triangle example above
//E:

function rowSumOddNumbers(n){
    //return n to the power of 3
    return n**3
}

console.log(rowSumOddNumbers(1))//1
console.log(rowSumOddNumbers(42))//74088
