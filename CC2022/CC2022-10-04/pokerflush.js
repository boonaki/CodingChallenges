// Determine if the poker hand is flush, meaning if the five cards are of the same suit.

// Your function will be passed a list/array of 5 strings, each representing a poker card in the format "5H" (5 of hearts), meaning the value of the card followed by the initial of its suit (Hearts, Spades, Diamonds or Clubs). No jokers included.

// Your function should return true if the hand is a flush, false otherwise.

// The possible card values are 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A

//given an array of strings, always valid strings (a number followed by a letter) indicating what kind of card it is
//return a boolean if the hand is a flush or not

function pokerFlushCheck(cards) {
    //define 4 strings with length of 5, consisting of only letters from each suit "HHHHH" and "SSSSS"
    //map array
    //slice first chararcter from each string and join mapped array, and split again
    //filter out 0's from array
    //check if joined array is equal to any of the strings and return check value
    let spades = "SSSSS"
    let clubs = "CCCCC"
    let diamonds = "DDDDD"
    let hearts = "HHHHH"
    cards = cards.map((card) => {
        return card.slice(-1)
    }).join('')
    return cards === spades || cards === clubs || cards === diamonds || cards === hearts

}

console.log(pokerFlushCheck(["AS", "3S", "9S", "KS", "4S"]))//true
console.log(pokerFlushCheck(["AD", "4S", "7H", "KS", "10S"]))//false