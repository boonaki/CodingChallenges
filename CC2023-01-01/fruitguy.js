// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones. 

//given an array of strings, can be empty
//return the array of strings with the rottenFruit (camelcase) taken out and replaced with a 'fresh' fruit

function findRottenFruit(arr) {
    //check if array is null or undefined and return an empty array if so
    //map array
    //check if string includes 'rotten'
    //if so slice string from 0 to 6, lowercase and return
    //else return string
    //return mapped array
    if (arr === [] || arr === null || arr === undefined) {
        return []
    }
    return arr.map(e => {
        if (e.includes('rotten')) {
            e = e.slice(6).toLowerCase()
        }
        return e
    })
}

console.log(findRottenFruit(['apple', 'rottenApple', 'banana']))//['apple', 'apple', 'banana']
console.log(findRottenFruit(['apple', 'blackberry', 'banana']))//['apple', 'blackberry', 'banana']
console.log(findRottenFruit([]))//[]

function findRottenFruitReWrite(arr2){
    return arr2 ? arr2.map(e => e.replace('rotten', '').toLowerCase()) : []
}