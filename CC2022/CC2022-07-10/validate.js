// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

//P: given a string of random characters (numbers, characters, special characters)
//R: return a boolean if each character is a digit and length is === 4 or 6
//E;

function validatePin(pin){
    //create array of digits 0-9
    //split string and filter looop
    //each character check if character is included in digits array
    //join filtered array
    //return true if filtered string is === pin && pin length === 4 or pinlength is === 6
    if(pin.length === 4 || pin.length === 6){
        let digits = ['0','1','2','3','4','5','6','7','8','9']
        let pinCheck = pin.split('')
        pinCheck = pinCheck.filter((elem) => digits.includes(elem)).join('')
        return pinCheck === pin
    }else{
        return false
    }

}

console.log(validatePin('1234'))//true
console.log(validatePin('123456'))//true
console.log(validatePin('a234'))//false

