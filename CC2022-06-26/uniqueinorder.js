// Create a function which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

//P: given a sequence of numbers or characters, could be string or an array
//R: return an array if array, with only 1 char/num from its group
//   a group is determined by if any of the same characters are 'touching
//E:

function uniqueOrder(sequence){
    //spread array, run loop
    //filter if index of element is not equal to the element before
    //return array
    return [...sequence].filter((elem,idx) => elem !== sequence[idx-1])
}

console.log(uniqueOrder('AAAABBBCCDAABBB'))//['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueOrder('ABBCcAD'))//['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueOrder([1,2,2,3,3]))//[1,2,3]
