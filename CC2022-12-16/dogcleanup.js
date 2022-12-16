// You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D

// Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

// You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.

// You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

// If you do, return 'Clean', else return 'Cr@p'.

// Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

//given an array of sub arrays and 2 numbers representing a capacity and number of bags
//return a string saying "Clean" if the number of @'s in each subarray is less than or equal to capacity given, else return 'Cr@p'

function checkCleanUp(arr, bags, cap) {
    //redefine cap as product of cap and bags
    //define a trash count as 0
    //for loop
    //inner for loop for each value in each subarray
    //check if value is equal to '@', then increment trash count
    //after loop, check if trash count is less than or equal to cap
    //return corresponding string
    cap = cap * bags
    let trash = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === '@') {
                trash++
            } else if (arr[i][j] === 'D') {
                return 'Dog!!'
            }
        }
    }
    return trash <= cap ? 'Clean' : 'Cr@p'
}

console.log(checkCleanUp([['_', '_', '_', '_'], ['_', '_', '_', '@'], ['_', '_', '@', '_']], 2, 2), "Clean")
console.log(checkCleanUp([['_', '_', '@', '@'], ['@', '_', '_', '@'], ['_', '_', '@', '_']], 2, 2), "Cr@p")
console.log(checkCleanUp([['_', '_', '@', '@'], ['@', 'D', '_', '@'], ['_', '_', '@', '_']], 2, 2), "Dog!!")