////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
     
    // Write an expression that operates on a variable called `move`
     
      
     move.toLowerCase; 
     if (move != null ){        
       return move;
     } else{ 
        return randomPlay()     
   }
  }
    // If a `move` has a value, your expression should evaluate to that value.

    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    
    //return /* Your Expression */;


function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move != null ){
       return move;
     } else{ 
        return randomPlay();
     }
    }


function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    //YOUR CODE HERE 
    if (playerMove === computerMove){
        winner = 'tie'; 
        return winner;}
    else if (playerMove === 'rock' && computerMove === 'scissors'){
        winner = 'player';
        return winner;}
    else if (playerMove === 'rock' && computerMove === 'papper'){
         winner = 'computer';
         return winner;}   
    else if(playerMove === 'paper' && computerMove === 'scissors'){
          winner = 'computer'
          return winner;}   
    else if(playerMove === 'paper' && computerMove === 'rock'){
          winner = 'player';
          return winner;}  
    else if (playerMove === 'scissors' &&  computerMove === 'rock'){ 
          winner = 'computer';
          return winner;}
    else if (playerMove === 'scissors' &&  computerMove === 'paper'){
          winner = 'player';
          return winner;}
    else {
        winner = 'error';
          return winner;}

    
   
}
//var winner = getWinner('paper','scissors')
//console.log(winner);

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
     //YOUR CODE HERE 

    while(true){
      var move = getInput()
      if  (getWinner(getPlayerMove(move),getComputerMove()) == 'player'){
          playerWins++
     } else{ 
      computerWins++}
      console.log(playerWins);
      console.log(computerWins);
       if (playerWins >= 5 || computerWins  >= 5){
        break;
      }
    }
    console.log('player wins = ' + playerWins + ' computer wins = ' + computerWins)
    return [playerWins, computerWins];
}

playToFive();
