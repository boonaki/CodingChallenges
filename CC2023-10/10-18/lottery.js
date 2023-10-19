// Time to win the lottery!
// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.
// Example ticket:
// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.
// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.
// All inputs will be in the correct format. Strings on tickets are not always the same length.

//given an array of structurally identical items, given an integer as the number of wins to compare against. Always valid, number will always be whole
//return a string depending on whether or not the input wins or loses
//[[string, number]], num

function lottery(ticket, wins){
   //define ticketWins var
   //run for loop for length of ticket
   //run for loop for length of current string
      //check if current character code is equal to the winning number for that set
      //if so increment ticket wins
   //ternary for return
   let ticketWins = 0
   for(let i = 0; i < ticket.length; i++){
      for(let j = 0; j < ticket[i][0].length; j++){
         if(ticket[i][0][j].charCodeAt(0) === ticket[i][1]){
            ticketWins++
            break;
         }
      }
   }
   return ticketWins >= wins ? "Winner!" : "Loser!"
}