// Create a function that takes a number as an argument and returns a grade based on that number.
// Score 	Grade
// Anything greater than 1 or less than 0.6 	"F"
// 0.9 or greater 	"A"
// 0.8 or greater 	"B"
// 0.7 or greater 	"C"
// 0.6 or greater 	"D"

//given a number, may be whole or float
//return a letter grade capitalized based on the given number score

function grade(score) {
    if (score >= 0.9 && score <= 1) {
        return 'A'
    } else if (score >= 0.8 && score < 0.9) {
        return 'B'
    } else if (score >= 0.7 && score < 0.8) {
        return 'C'
    } else if (score >= 0.6 && score < 0.7) {
        return 'D'
    } else {
        return 'F'
    }
}

console.log(score(.9), 'A')
console.log(score(.8), 'B')
console.log(score(.5), 'F')