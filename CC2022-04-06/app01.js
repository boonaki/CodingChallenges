// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
    return arr.filter((elem, idx) => idx === 0 || idx % 2 === 0)
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])) // should equal ['Hello', 'Hello Again']
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) //should equal [1, 3, 5, 7, 9]
console.log(removeEveryOther([1, 2])) //should equal [1]
