//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

//P: given an array of postive whole numbers of arbitary length
//R: return sum of the two lowest values
//E: 

function sumTwoSmallest(numbers){
    //sort array
    //return arr[0] + arr[1]
    numbers.sort((a,b) => a-b)
    return numbers[0] + numbers[1]
}

console.log(sumTwoSmallest([5, 8, 12, 19, 22]))//13
console.log(sumTwoSmallest([15, 28, 4, 2, 43]))//6
console.log(sumTwoSmallest([3, 87, 45, 12, 7]))//10