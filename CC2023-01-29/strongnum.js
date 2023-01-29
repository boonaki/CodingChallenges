// Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

//given a number, always a pos number, always whole
//return a string starting whether the number is strong or not
//a strong number is a number that sum of the factorial of its digits is equal to the number itself

function isStrong(num){
    //define a factorial function
    //convert num to string, then split
    //reduce, call the factorial then add into eachother

    //check if the reduced number is equal to the original
    //return corresponding string
    let numCopy = num.toString().split('');
    numCopy = numCopy.reduce((acc,curr) => acc + factorial(+curr), 0); 
    return numCopy === num ? 'STRONG!!!!' : 'Not Strong !!'
}

function factorial(n){
    if(n < 2) return 1;
    return n * factorial(n-1);
}



console.log(isStrong(1), 'STRONG!!!!')
console.log(isStrong(2), 'STRONG!!!!')
console.log(isStrong(145), 'STRONG!!!!')
console.log(isStrong(7), 'Not Strong !!')