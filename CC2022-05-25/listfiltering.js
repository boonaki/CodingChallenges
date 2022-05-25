// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// Example

// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

//P: given list of ints and strings, ints are >= 0
//R: give new array of only numbers
//E:

function filter_list(arr){
    //run filter method
    //add only when typeof elem is === 'number'
    return l.filter((elem) => typeof elem === 'number')
}

console.log(filter_List([1,2,'a','b']))// [1,2]
console.log(filter_List([1,'a','b',0,15]))// [1,0,15]