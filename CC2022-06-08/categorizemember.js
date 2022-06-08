// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

//P: Given an array of arrays, each array inside array having 2 number values (neg/pos)
//R: give each array within the array a string of 'Open' or 'Senior' and return
//E:

//can map through data
function openOrSenior(data){
    //create empty return array
    //loop through data
    //if value1 in array is >= to 55 && value2 is >= 7
    //push 'Senior' to return arr
    //else: push 'Open' return arr
    let array = []
    data.forEach((arr) => {
    if(arr[0] >= 55 && arr[1] > 7){
        array.push('Senior')
    }else{
        array.push('Open')
    }
    })
    return array
}

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))//["Open", "Open", "Senior", "Open", "Open", "Senior"]
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]))//['Open', 'Open', 'Open', 'Open']