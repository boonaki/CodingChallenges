//Write a function which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

//P: given an array of integers, never empty, always valid
//R: return the digit that is repeated the most, if numbers have same repeat, return max
//E:

function highestRank(arr) {
    //define obj to hold count and values
    //define highest freq to hold item(s)
    //loop through array and add each value to obj, incrementing prop value
    //convert values into array with Object and find max of that
    //for each key in object
    //if current key value is equal to max
    //push key into highest freq arr
    //return max of that array
    let obj = {}
    let highFreq = []
    arr.forEach((elem) => {
        obj[elem] ? obj[elem]++ : obj[elem] = 1
    })
    let highestVal = Math.max(...Object.values(obj))
    for (key in obj) {
        if (obj[key] === highestVal) {
            highFreq.push(+key)
        }
    }
    return Math.max(...highFreq)
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]))//12
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]))//12
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]))//3