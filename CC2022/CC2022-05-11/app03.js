//Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

// Examples (Input -> Output)

// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

// Notes

//     You may consider that there will not be any empty arrays/vectors.

let max = function(list){
    list = list.sort((a,b) => a-b)
    return list[list.length-1];
}
  
  let min = function(list){
    list = list.sort((a,b) => a-b)
    return list[0];
}

console.log(min([-52, 56, 30, 29, -54, 0, -110])) //should output -110
console.log(min([42, 54, 65, 87, 0])) //should output 0
console.log(max([4,6,2,1,9,63,-134,566])) //should output 566
console.log(max([5])) //should output 5
