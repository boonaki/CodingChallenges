// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

function defineSuit(card) {
    card = card.split('')
    const cards = {
      "♣" : 'clubs',
      "♦" : 'diamonds',
      "♥" : 'hearts',
      "♠" : 'spades',
    }
    return cards[card[card.length - 1]]
}

console.log(defineSuit("A♠")) // should output spades
console.log(defineSuit("9♦")) // should output diamonds
console.log(defineSuit("J♥")) // should output hearts
console.log(defineSuit("K♣")) // should output clubs