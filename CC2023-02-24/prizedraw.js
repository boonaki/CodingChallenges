// To participate in a prize draw each one gives his/her firstname.

// Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.

// The length of the firstname is added to the sum of these ranks hence a number som.

// An array of random weights is linked to the firstnames and each som is multiplied by its corresponding weight to get what they call a winning number.
// Example:

// names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
// weights: [1, 4, 4, 5, 2, 1]

// PauL -> som = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54
// The *weight* associated with PauL is 2 so PauL's *winning number* is 54 * 2 = 108.

// Now one can sort the firstnames in decreasing order of the winning numbers. When two people have the same winning number sort them alphabetically by their firstnames.
// Task:

//     parameters: st a string of firstnames, we an array of weights, n a rank

//     return: the firstname of the participant whose rank is n (ranks are numbered from 1)

//given a string of first names, an array of numbers linked to each name, and a integer representing the index of the name to return
//return the firstname of the person at n

function rank(names, wt, n) {
    //check if names is empty, return "No Participants"
    //check if length of wt is equal to n, if not return "Not enough participants"

    //split names by comma
    //run map for names, store in new array
    //lowercase and split each by letter
    //store length in variable
    //run inner map on each name
    //convert each to alphabet rank (1-26)
    //reduce
    //add namelength to reduced, then multiply by wt[i]

    //run for loop to sort names (bubble sort)
    //inner for loop
    //sort by number then append name to number
    if (names.length < 1) {
        return "No participants"
    }
    if (wt.length < n) return "Not enough participants"

    names = names.split(',')
    let arr = names.map((e, idx) => {
        let length = e.length
        e = e.toLowerCase().split('').map((elem) => {
            elem = elem.charCodeAt(0) - 96
            return elem
        }).reduce((acc, curr) => acc + +curr, 0)
        e = (e + length) * wt[idx]
        return e
    })
    let copy = arr.slice()
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j + 1] > arr[j]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
            }
        }
    }
    return names[copy.indexOf(arr[n - 1])]
}

console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4), "Benjamin")
console.log(rank("Lagon,Lily", [1, 5], 2), "Lagon")
console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 8), "Not enough participants")
console.log(rank("", [4, 2, 1, 4, 3, 1, 2], 6), "No participants")