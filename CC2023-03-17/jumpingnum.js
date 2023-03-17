// Jumping number is the number that All adjacent digits in it differ by 1.

// Given a number, Find if it is Jumping or not . 

//given a number, always whole & positive, but can be of arbitrary length
//return a string indicating if the given number is jumping or not

function isJumping(n) {
    //convert num to string, split and store in new variable
    //check if length is 1, return
    //for loop
    //check if current + 1 is not equal to next || current - 1 is not equal to next
    //if true, return 'Not!!'

    //after loop return "Jumping!!"
    let num = n.toString().split('')
    if (num.length == 1) return 'Jumping!!'
    for (let i = 0; i < num.length - 1; i++) {
        if (+num[i] + 1 === +num[i + 1] || +num[i] - 1 === +num[i + 1]) {
            continue;
        } else {
            return 'Not!!'
        }
    }
    return 'Jumping!!'
}

console.log(isJumping(1), 'Jumping!!')
console.log(isJumping(7), 'Jumping!!')
console.log(isJumping(79), 'Not!!')
console.log(isJumping(739), 'Not!!')
console.log(isJumping(4343456), "Jumping!!")