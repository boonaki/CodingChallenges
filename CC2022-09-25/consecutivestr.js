// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

//given an array of strings
//return the first longest concatenation

function longestConsec(arr, k) {
    //create array to store concatenated strings
    //for loop to array length for i
    //declare count, init to 1
    //declare temp as first
    //while count is less than k
    //add arr[i+k] into temp
    //increment count
    //push temp into array
    //find max length in array
    //filter elmenents with max length
    //return first
    if (arr.length < 1 || k < 1 || arr.length < k) {
        return ""
    }
    let concatarr = []
    for (let i = 0; i < arr.length; i++) {
        let count = 1
        let temp = arr[i]
        while (count < k) {
            if (arr[i + count]) {
                temp = temp + arr[i + count]
            }
            count++
        }
        concatarr.push(temp)
    }
    concatarr.sort((a, b) => b.length - a.length)
    return concatarr[0]
}

console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2))//"folingtrashy"
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1))//"oocccffuucccjjjkkkjyyyeehh"
console.log(longestConsec([], 3))//""