//You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

function defineSuit(card) {
    card = card.charCodeAt(1)
    switch(card){
        case 9827:
          return "clubs"
          break;
        case 9824:
          return 'spades'
          break;
        case 9830:
          return 'diamonds'
          break;
        case 9829:
          return 'hearts'
          break;
    }
}

console.log(defineSuit("3♣")) //should output 'clubs'
console.log(defineSuit("Q♠")) //should output 'spades'
console.log(defineSuit("9♦")) //should output 'diamonds'
console.log(defineSuit("J♥")) //should output 'hearts'