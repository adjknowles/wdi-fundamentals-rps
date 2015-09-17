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
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move = move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move = move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
            console.log('tie');
    }
    else if (playerMove === 'rock') {
        if (computerMove === 'paper') {
            console.log('computer');
        }
        else {
            console.log('player');
        }
    }
    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            console.log('player');
        }
        else {
            console.log('computer');
        }
    }
    else if (playerMove === 'scissors') {
        if (computerMove === 'paper') {
            console.log('player');
        }
        else {
            console.log('computer');
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins <= 5 && computerWins <= 5) {
        getWinner();
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove;
        console.log('the winner is' + winner);
        if (winner === 'player') {
            console.log('player scores a point');
            playerWins += 1;
            console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        }
        else if (winner === 'computer') {
            console.log('computer scores a point');
            computerWins += 1;
            console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        }
        console.log(tie);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    return [playerWins, computerWins];
}

