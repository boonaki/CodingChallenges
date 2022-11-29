// Your task is to remove all consecutive duplicate letters from each string in the array.

//given an array of strings, always valid and array length > 0
//return an array of the strings but with all duplicate letters (that sit next to eachother) removed

function removeDupe(arr) {
    //map given array
    //split and map each string in array
    //check if current and next are the same, if so make the current an empty string and return
    //return array
    arr = arr.map(str => {
        str = str.split('').map((e, i, array) => {
            if (e === array[i + 1]) {
                e = ''
            }
            return e
        }).join('')
        return str
    })
    return arr
}

console.log(removeDupe(['abracadabra', 'eek', 'boonaki']))//['abracadabra', 'ek', 'bonaki']