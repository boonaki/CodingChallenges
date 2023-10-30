// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

//     if x > y: 3 points (win)
//     if x < y: 0 points (loss)
//     if x = y: 1 point (tie)

// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

//given an array of strings, always of same format, never empty
//return the amount of points scored for team 'x'

function xPoints(games) {
    //map through array
    //split each element and check if left is equal to right, and make current element 1
    //check if left is greater than right, and make current element 3
    //else make current element 0
    //return reduced array
    games = games.map((e) => {
        e = e.split(':')
        if (e[0] == e[1]) {
            return 1
        } else if (+e[0] > +e[1]) {
            return 3
        } else {
            return 0
        }
    })
    return games.reduce((a, c) => a + c)
}

console.log(xPoints(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]))//30
console.log(xPoints(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]))//10
console.log(xPoints(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]))//0