// A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.

// If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)

// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.
// The task

// Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.

//given an integer value of arbitrary length, always an integer always whole
//return a string indicating if the given number is Balanced or Not Balanced

function balanced(num) {
    //convert num to string and store in new var
    //if length % 2 (even), then slice from length / 2
    //if length is odd, then slice from length / 2 - 1 and store each half into new half variables
    //split each half and reduce and check if the same
    //if not then return "Not Balanced" & "Balanced" if they are the same
    let numstr = num.toString();
    let first = "";
    let second = "";
    if (numstr.length / 2 < 1 || numstr.length === 2) {
        return "Balanced"
    }
    if (numstr.length % 2 === 0) {
        first = numstr.slice(0, numstr.length / 2 - 1);
    } else {
        first = numstr.slice(0, numstr.length / 2);
    }
    second = numstr.slice((numstr.length / 2) + 1);

    let firsttotal = first.split("").reduce((a, b) => parseInt(a) + parseInt(b), 0);
    let secondtotal = second.split("").reduce((a, b) => parseInt(a) + parseInt(b), 0);
    return (firsttotal === secondtotal) ? "Balanced" : "Not Balanced";
}

console.log(balanced(969))//"Balanced"
console.log(balanced(56239814))//"Balanced"
console.log(balanced(13))//"Balanced"
console.log(balanced(432))//"Not Balanced"
console.log(balanced(66545))//"Not Balanced"
console.log(balanced(424))//"Balanced"