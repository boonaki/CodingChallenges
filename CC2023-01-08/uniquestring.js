// For this challenge, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings. 

//given 2 strings, never empty but always valid
//return a string with all the unique characters

function uniqueString(a, b) {
    //define duplicate array
    //loop through first string to determine duplicates
    //concatenate a and b, then filter out any duplicates, join and return
    let dupes = []
    for (let i = 0; i < a.length; i++) {
        if (b.includes(a[i])) {
            dupes.push(a[i])
        }
    }
    return a.concat(b).split('').filter(e => !dupes.includes(e)).join('')
}

console.log(uniqueString('xyab', 'xzca'), 'ybzc')
console.log(uniqueString('abcd', 'xyz'), 'abcdxyz')