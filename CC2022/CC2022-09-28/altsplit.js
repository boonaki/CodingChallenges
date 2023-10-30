// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

//given a string of text and a number, write two functions that encrypt the string n times and decrypts the string n times
//for encryption: return string with all odd-indexed characters taken out and placed in front of string, repeat n times
//for decryption: return string with characters in first half of string placed in front of every other character of second half

function encrypt(text, n) {
    //split string
    //loop for n times (i count)
    //declare temp array
    //loop the length string, now array (j count)
    //every odd index, slice from indexof value to indexof value +1 and push value into temp array
    //after loop concat temp array with string array
    //return the string
    text = text.split('')
    for (let i = 0; i < n; i++) {
        let temp = []
        let evens = []
        for (let j = 0; j < text.length; j++) {
            if (j % 2 !== 0) {
                let odd = text.slice(j, j + 1).join('')
                temp.push(odd)
            } else {
                let even = text.slice(j, j + 1).join('')
                evens.push(even)
            }
        }
        text = temp.concat(evens)
    }
    return text.join('')
}

function decrypt(str, n) {
    //check if string is empty or n is less than 1; if so return the string
    //define first half as sliced string from 0 to length/2
    //define second half as sliced string from length/2
    //define temp string
    //init count variables i and j to 0
    //while the length of temp string is not equal to og string length
    //if length of res is even
    //add current element (i) from second half to temp and increment i
    //else then add current element (j) from first half to temp and increment j
    //recurse function, passing in temp and decrementing n (by returning new value instead of old value)
    if(!str || n < 1){
        return str
    }
    let firstHalf = str.slice(0, str.length/2)
    let secondHalf = str.slice(str.length/2)
    let temp = ""
    let i = 0
    let j = 0

    while(temp.length < str.length){
        if(temp.length % 2 === 0){
            temp += secondHalf[i]
            i++
        }else{
            temp += firstHalf[j]
            j++
        }
    }
    return decrypt(temp, --n)
}

console.log(encrypt("hello world", 1))//"el olhlowrd"
console.log(decrypt(" Tah itse sits!", 3))//"This is a test!"