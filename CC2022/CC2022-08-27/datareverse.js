//Write a function where A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed

//P: given an array of numbers in bits (1,0)
//R: return the data reversed, but each segment(8 bits long) still in the same order
//E:

function dataReverse(data) {
    //declare empty array and count
    //loop through each segment (8 bits long)
    //declare place holder
    //push every 8 units into place holder, increment count and shift into first array
    //reverse, join segments and return
    let dataArr = []
    let count = 0
    for (let i = 0; i < data.length / 8; i++) {
        let pushed = []
        while (pushed.length < 8) {
            pushed.push(data[count])
            count++
        }
        dataArr.unshift(...pushed)
    }
    return dataArr
}

console.log(dataReverse([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]))//[1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
console.log(dataReverse([0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1]))//[0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]