//Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. Büttner, to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers from 1 through a given number n.

//when given any value of any type
//return the sum of all integers from 1 to n, if n is a whole, greater than 0 and typeof number
//E:

function sumNumbers(n) {
    //check if whole, type of number and a whole and return false if not
    //init count
    //loop from 1 to n
    //add i to count with each iteration
    //return count
    if (typeof n !== 'number' || Math.round(n) !== n || n <= 0) {
        return false
    }
    let count = 0
    for (let i = 1; i <= n; i++) {
        count += i
    }
    return count
}

console.log(sumNumbers('n'))//false
console.log(sumNumbers(3.14))//false
console.log(sumNumbers(100))//5050