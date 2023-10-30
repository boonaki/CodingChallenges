// My friend John likes to go to the cinema. He can choose between system A and system B.

// System A : he buys a ticket (15 dollars) every time
// System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price, 
// then for each additional ticket he pays 0.90 times the price paid for the previous ticket.

// John wants to know how many times he must go to the cinema so that the final result of System B, when rounded up to the next dollar, will be cheaper than System A.

// The function movie has 3 parameters: card (price of the card), ticket (normal price of a ticket), perc (fraction of what he paid for the previous ticket) and returns the first n such that

//given 3 parameters, representing the price of the card, the price of the ticket and the percentage of what he paid for the previous ticket
//return a single number repesenting the number of loops it takes for the cost of the card to be "worth it"

function cinemaCost(card, ticket, perc){
    //define loop count
    //while ticket is less than card
    //card += cardCostAmount * percent to the count power
    //return loop count
    let cnt = 0;
    while (ticket * cnt <= Math.ceil(card)) {
      cnt++;
      card += ticket * perc ** cnt;
    }
    return cnt;
}

console.log(cinemaCost(500,15,.9))//43