// How many ways can you make the sum of a number?

// In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition. If order matters, the sum becomes a composition. For example, 4 can be partitioned in five distinct ways:
// 4
// 3 + 1
// 2 + 2
// 2 + 1 + 1
// 1 + 1 + 1 + 1

//given a single integer, always whole, can be less than 0
//return a number representing the total number of ways the given number can be partitioned

function expSum(num) {
    //call another function to have access to the number twice
    return partition(num, num)
}

let arr = []

function partition(num, prev) {
    if (num === 0) return 1
    if (prev === 0) return 0
    if (num < 0) return 0
    if (arr[num] === undefined) {
        arr[num] = []
    }
    let result = arr[num][prev]
    if (typeof result != "number") {
        result = partition(num - prev, prev) + partition(num, prev - 1)
        arr[num][prev] = result
    }
    return result
}

console.log(expSum(4))//5
console.log(expSum(10))//42