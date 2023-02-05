const options = ['rock', 'paper', 'scissors'];
const rockBtn = document.querySelector('.rock')
const paperBtn = document.querySelector('.paper')
const scissorsBtn = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
const playerScoreSpan = document.querySelector('.playerScore')
const computerScoreSpan = document.querySelector('.computerScore')

let scorePlayer = 0;
let scoreComputer = 0;
let scoreDraw = 0;

rockBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
    computeScore(scoreDraw, scorePlayer, scoreComputer)
})

paperBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
    computeScore(scoreDraw, scorePlayer, scoreComputer)
})

scissorsBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection)
    computeScore(scoreDraw, scorePlayer, scoreComputer)
})

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
    const p = document.createElement('p');
    if (result == "Draw") {
        p.innerText = "Draw";
        outcomeDiv.appendChild(p)
        scoreDraw++
    } else if (result == "Computer") {
        p.innerText = "Computer";
        outcomeDiv.appendChild(p)
        scoreComputer++
        computerScoreSpan.innerText = `Computer's score: ${scoreComputer}`
    } else {
        p.innerText = "Player";
        outcomeDiv.appendChild(p)
        scorePlayer++
        playerScoreSpan.innerText = `Player's score: ${scorePlayer}`
    }
}

function computeScore(scoreDraw, scorePlayer, scoreComputer) {
    const h2 = document.createElement('h2');
    if (scoreComputer === 5) {
        h2.innerText = "Computer wins"
        outcomeDiv.append(h2)
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    } else if (scorePlayer === 5) {
        h2.innerText = "Player wins"
        outcomeDiv.append(h2)
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
}

// function validatePlayerChoice() {
//     let validatedInput = false;
//     while (validatedInput == false) {
//         const choice = prompt("Rock, Paper or Scissors?");
//         if (choice == null) {
//             continue;
//         }

//         const lowerChoice = choice.toLowerCase();
//         if (options.includes(lowerChoice)) {
//             validatedInput = true;
//             return lowerChoice;
//         }
//     }
// }

// function game() {
//     let scorePlayer = 0;
//     let scoreComputer = 0;
    // for (i=0; i < 5; i++) {
    //     const playerSelection = validatePlayerChoice();
    //     const computerSelection = getComputerChoice();
    //     console.log("---------------")
    //     console.log(playRound(playerSelection, computerSelection));
    //     console.log("---------------")
    //     if (checkWinner(playerSelection, computerSelection) == "Player") {
    //         scorePlayer++;
    //     } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
    //         scoreComputer++;
    //     }
    // }
//     console.log("Game Over");
//     if (scorePlayer > scoreComputer) {
//         console.log("You win!");
//     } else if (scorePlayer < scoreComputer) {
//         console.log("You lose");
//     } else {
//         console.log("Tie");
//     }
// }

// game()