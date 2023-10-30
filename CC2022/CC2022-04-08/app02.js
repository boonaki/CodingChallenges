// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value,
// without using a loop.

// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not. With strings you will need to account for case.

function check(a,x){
    return a.findIndex((val) => val === x) >= 0
    //return a.includes(b)
};

console.log(check([66, 101], 66)) //should equal true
console.log(check(['t', 'e', 's', 't'], 'e')) //should equal true
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45)) //should equal true
console.log(check(['what', 'a', 'great', 'kata'], 'kat')) //should equal false