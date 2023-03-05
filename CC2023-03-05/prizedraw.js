// To participate in a prize draw each one gives his/her firstname.

// Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.

// The length of the firstname is added to the sum of these ranks hence a number som.

// An array of random weights is linked to the firstnames and each som is multiplied by its corresponding weight to get what they call a winning number.

//given a string of names, an array of numbers, and a number representing the index to grab from the sorted array
//return the name at index 'n' in the array 

function rank(names, wt, n) {
    //check if length of names is less than one
    //check if length of wt is less than n
    //redefine names as array split by ','
    //in new var, convert each element in names to object as {name: '', val: 0}
    //val being the current letter split, each letter converted with charCodeAt, then subtracting 96 to make 1-26
    //sort by names
    //sort by vals
    //return copy[n]
    if (names.length < 1) return 'No participants'
    if (wt.length < n) return 'Not enough participants'

    let copy = names.split(',').map((e, i) => {
        let temp = e.toLowerCase().split('').reduce((a,c) => a + c.charCodeAt(0) - 95, 0) + e.length
        e = {
            name: e,
            val: temp * wt[i]
        }
        return e
    }).sort((a, b) => a.name - b.name).sort((a, b) => b.val - a.val)
    return copy[n - 1].name
}

console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4), "Benjamin")
console.log(rank("Lagon,Lily", [1, 5], 2), "Lagon")
console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 8), "Not enough participants")
console.log(rank("", [4, 2, 1, 4, 3, 1, 2], 6), "No participants")