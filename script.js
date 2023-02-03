const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Draw";
    } else if (
        (playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}


function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Draw") {
        return "Draw!";
    } else if (result == "Computer") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
}

function validatePlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt("Rock, Paper or Scissors?");
        if (choice == null) {
            continue;
        }

        const lowerChoice = choice.toLowerCase();
        if (options.includes(lowerChoice)) {
            validatedInput = true;
            return lowerChoice;
        }
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (i=0; i < 5; i++) {
        const playerSelection = validatePlayerChoice();
        const computerSelection = getComputerChoice();
        console.log("---------------")
        console.log(playRound(playerSelection, computerSelection));
        console.log("---------------")
        if (checkWinner(playerSelection, computerSelection) == "Player") {
            scorePlayer++;
        } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
            scoreComputer++;
        }
    }
    console.log("Game Over");
    if (scorePlayer > scoreComputer) {
        console.log("You win!");
    } else if (scorePlayer < scoreComputer) {
        console.log("You lose");
    } else {
        console.log("Tie");
    }
}

game()