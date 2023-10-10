function getComputerChoice() {
    let num = Math.floor(Math.random()*3)+1;
    if (num === 1) {
        return "Rock";
    }
    else if (num === 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "It's a tie!";
        }
        else if (computerSelection === "paper") {
            return "You Lose! Paper beats rock!";
        }
        else {
            return "You win! Rock beats scissors!";
        }

    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats rock!";
        }
        else if (computerSelection === "paper") {
            return "It's a tie!";
        }
        else {
            return "You lose! Scissors beats paper!";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats scissors!";
        }
        else if (computerSelection === "paper") {
            return "You win! Scissors beats rock!";
        }
        else {
            return "It's a tie!";
        }
    }
    else {
        return "You Lose due to invalid selection";
    }
}

let playerWins = 0;
let computerWins = 0;
let roundsPlayed = 0;

