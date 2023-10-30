// Your task, is to create NxN multiplication table, of size provided in parameter.

//given a number value
//return an array of subarrays, each of length n, consisting of n subarrays

function multiTable(n) {
    //declare empty array
    //loop from i=1 to n
    //define temp
    //loop from 1 to n
    //push i * j into temp
    //push temp into empty array
    //return array
    let arr = []
    for (let i = 1; i < n + 1; i++) {
        let temp = []
        for (let j = 1; j < n + 1; j++) {
            temp.push(i * j)
        }
        arr.push(temp)
    }
    return arr
}

console.log(multiTable(3))//[[1,2,3],[2,4,6],[3,6,9]]

