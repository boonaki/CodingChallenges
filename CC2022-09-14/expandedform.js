//Write a function that when given a number, returns a string represented as the number in expanded form


//given a number, all greater than 0 and all whole numbers
//return a string with the number in expanded form

function expandedForm(num) {
    //define empty array
    //convert number to string and split
    //loop for length of string
    //if current num is no 0
    //convert the string to number, multiply by 10^current index + 1 and push into empty array
    //return the joined array
    let arr = []
    num = num.toString().split('')
    for (let i = 0; i < num.length; i++) {
        if (num[i] !== '0') {
            arr.push(+num[i] * (10 ** (num.length - (i + 1))))
        }
    }
    return arr.join(' + ')
}

console.log(expandedForm(402))//'400 + 2'
console.log(expandedForm(17))//'10 + 7'
console.log(expandedForm(17430))//'10000 + 7000 + 400 + 30'
