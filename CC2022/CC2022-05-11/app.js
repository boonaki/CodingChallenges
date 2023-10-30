//You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

function defineSuit(card) {
    const s = {
        "♣": "clubs",
        "♠": "spades",
        "♦": "diamonds",
        "♥": "hearts"
    }
    return s[card.charAt(card.length - 1)]
}

console.log(defineSuit("3♣")) //should output 'clubs'
console.log(defineSuit("Q♠")) //should output 'spades'
console.log(defineSuit("9♦")) //should output 'diamonds'
console.log(defineSuit("J♥")) //should output 'hearts'