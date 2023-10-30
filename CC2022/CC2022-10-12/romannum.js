// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

//     I can be placed before V (5) and X (10) to make 4 and 9. 
//     X can be placed before L (50) and C (100) to make 40 and 90. 
//     C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.


//given a roman numeral in type string, always valid numeral between 1 and 3999
//return a number representing the roman numeral converted to an integer

function romanConvert(rNum) {
    //create obj for symbol and values
    //loop through length of rNum string
    //if char is I, check if next is V
    //if V then add 4 to count
    //else if X, then add 9 to count
    //if char X
    //check if before L then add 40 to count
    //else if before C add 90 to count
    //if char C
    //check if before D, add 400 to count
    //check if before M, add 900 to count
    //else add char I value to count
    //return count
    let obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    let count = 0
    for (let i = 0; i < rNum.length; i++) {
        let c = rNum[i]
        let next = rNum[i + 1] || 0
        if (c === 'I') {
            if (next === 'V') {
                count += 4
                i++
                continue
            } else if (next === 'X') {
                count += 9
                i++
                continue
            }
        } else if (c === 'X') {
            if (next === 'L') {
                count += 40
                i++
                continue
            } else if (next === 'C') {
                count += 90
                i++
                continue
            }
        } else if (c === 'C') {
            if (next === 'D') {
                count += 400
                i++
                continue
            } else if (next === 'M') {
                count += 900
                i++
                continue
            }
        }
        count += obj[c]
    }
    return count
}

console.log(romanConvert('IX'))//9
console.log(romanConvert('III'))//3
console.log(romanConvert('LVIII'))//58
console.log(romanConvert('MCMXCIV'))//1994