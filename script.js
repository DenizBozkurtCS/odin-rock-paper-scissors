function getComputerChoice() {
    let a = Math.floor(Math.random()*3);
    if (a == 0) {
        return "Rock";
    } else if (a == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return "It's a Tie!";
    } else {
        if (playerSelection == "rock") {
            if (computerSelection == "paper"){
                return "You Lose! Paper beats Rock";
            } else {
                return "You Win! Rock beats Scissors"
            }
        } else if (playerSelection == "paper") {
            if (computerSelection == "scissors") {
                return "You Lose! Scissors beats Paper"
            } else {
                return "You Win! Paper beats Rock";
            }
        } else if (playerSelection == "scissors") {
            if (computerSelection == "rock") {
                return "You Lose! Rock beats Scissors"
            } else {
                return "You Win! Scissors beats Paper"
            }
        }
    }
}

function game() {

    let count = 0;
    let output = "";
    let computerSelection = "";
    let playerSelection = "";

    for (i = 0; i<5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("Rock, Paper Scissors!");
        output = playRound(playerSelection, computerSelection);
        console.log(output);
        if (output == "It's a Tie!") {
            i--;
            continue;
        }
        if (output.charAt(4) == "W") {
            count++
        }
        if (count == 3){
            return "You Won!";
        }
    }
    return "You Lost!";
}