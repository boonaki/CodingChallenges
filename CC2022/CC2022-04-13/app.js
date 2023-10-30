//Write a function that returns a string in which firstname is swapped with last name.

function nameShuffler(str){
    let arr = str.split(' ')
    let elem = arr.shift()
    arr.push(elem)
    return arr.join(' ')
}

console.log(nameShuffler('john appleseed')) //should equal 'appleseed john'