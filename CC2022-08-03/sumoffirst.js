//Write a function which returns the sum of following series upto nth term(parameter).
//Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16

//P: using a set series of numbers defined outside of function, and given a single whole number (n)
//R: return the sum of the series up to a given number (n), rounded to 2 decimal places in type string. if given value is 0 then return   "0.00"
//E:

function seriesSum(n){
    //check if n is === 0 or 1 and return n.00
    //create array containing elements in series by adding 3 to denominator til index is === n
    //slice from 0 to n
    //reduce and return value rounded to 2 decimal places in type string
    if(n === 0 || n === 1){
        return `${n}.00`
    }
    let arr = [1]
    for(let i = 1; i < n; i++){
        let increment = 1
        increment = increment + (3*i)
        let denom = 1 / increment
        arr.push(denom)
    }
    arr = arr.slice(0,n)
    let value = Math.round(arr.reduce((a,c) => a + c) * 100)/100
    return value.toString().length === 4 ? value.toString() : `${value}0`
}

console.log(seriesSum(1))//'1.00'
console.log(seriesSum(2))//'1.25'
console.log(seriesSum(3))//'1.39'
console.log(seriesSum(4))//'1.49'