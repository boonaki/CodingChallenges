// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// given a string of characters, always valid characters (wpbs, mqdz)
//return who won the fight, ie which of the 2 groups has more characters present in the given string with each having a specified power

function alphabetWar(fight) {
    //define left object with characters wpbs
    //define right object with characters 'mqdz'
    //count properties in each
    //loop for string and increment counts
    //check which count is bigger and return
    let leftObj = {
        'w': 4,
        'p': 3,
        'b': 2,
        's': 1,
        count: 0
    }
    let rightObj = {
        'm': 4,
        'q': 3,
        'd': 2,
        'z': 1,
        count: 0
    }
    for (let i = 0; i < fight.length; i++) {
        if (leftObj[fight[i]]) {
            leftObj.count += leftObj[fight[i]]
        } else if (rightObj[fight[i]]) {
            rightObj.count += rightObj[fight[i]]
        }
    }
    if (leftObj.count === rightObj.count) {
        return "Let's fight again!"
    }
    if (leftObj.count > rightObj.count) {
        return 'Left side wins!'
    } else {
        return 'Right side wins!'
    }
}

console.log(alphabetWar("z"), "Right side wins!")
console.log(alphabetWar("zdqmwpbs"), "Let's fight agains!")
console.log(alphabetWar("wwwwwz"), "Left side wins!")