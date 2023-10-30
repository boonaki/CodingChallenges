//Rock Paper Scissors

//Let's play! You have to return which player won! In case of a draw return Draw!.

function rps(p1, p2){
    p1 = p1.split('')
    p1 = p1[0]
    p2 = p2.split('')
    p2 = p2[0]
    if(p1 === 'r' && p2 === 's' || p1 === 'p' && p2 === 'r' || p1 === 's' && p2 === 'p'){
      return 'Player 1 won!'
    }else if(p2 === 'r' && p1 === 's' || p2 === 'p' && p1 === 'r' || p2 === 's' && p1 === 'p'){
      return 'Player 2 won!'
    }else{
      return 'Draw!'
    }
}

console.log(rps('rock', 'scissors')) //should output 'Player 1 won!'
console.log(rps('scissors', 'paper')) //should output 'Player 1 won!'
console.log(rps('scissors', 'rock')) //should output 'Player 2 Won!'
console.log(rps('paper', 'scissors')) //should output 'Player 2 Won!'
console.log(rps('rock', 'rock')) //should output 'Draw!'
