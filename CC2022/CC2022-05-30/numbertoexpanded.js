// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// NOTE: All numbers will be whole numbers greater than 0.

//P: Given a number, all whole numbers greater than 0
//R: return an expanded form of the number 1830 --> 1000 + 800 + 30
//E:

function expandedForm(num){
    //convert num to string and find length
    //loop through string length
    //add to placeholder array
    //remove first digit in number

    //return placeholder array.join(' + ')
    num = String(num);
    let result = [];
    for (var i = 0; i < num.length; i++) {
        if (num[i] == 0) continue;
        else result.push(num[i] + "0".repeat(num.length -i -1))
    }
    return result.join(" + ")
    
}

console.log(expandedForm(12))// '10 + 2'
console.log(expandedForm(1833))// '1000 + 800 + 30 + 3'