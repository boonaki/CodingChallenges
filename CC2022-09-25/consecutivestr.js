// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

//given an array of strings
//return the first longest concatenation

function longestConsec(arr, k) {
    //define longest string
    //loop from i to arr length - k
    //slice arr from i to i + k
    //join the sliced array
    //if sliced string length is greater than longest length
        //assign longest to sliced string
    //return longest string
    let longest = ""
    for(let i = 0; k > 0 && i <= arr.length-k; i++){
        let temp = arr.slice(i, i+k).join('')
        if(temp.length > longest.length){
            longest = temp
        }
    }
    return longest
}

console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2))//"folingtrashy"
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1))//"oocccffuucccjjjkkkjyyyeehh"
console.log(longestConsec([], 3))//""