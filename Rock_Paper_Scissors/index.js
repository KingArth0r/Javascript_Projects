// Initialize elements to be changed
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

// Initialize score
let playerScore = 0;
let computerScore = 0;

// Initialize options
const choices = ["rock", "paper", "scissors"];
const winMessages = ["nice!", "You Win!", "W", "Massive W", "Easy W", "GGEZ", "Winner!"];
const loseMessages = ["L", "Fat L", "Big L", "you lose", "sad", "loser", "L"];
const drawMessages = ["draw...", "try again", "run it back", "go again", "tie"]

function playGame(playerChoice) {
    //Select random choice and message
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const winMessage = winMessages[Math.floor(Math.random() * winMessages.length)];
    const loseMessage = loseMessages[Math.floor(Math.random() * loseMessages.length)];

    let result = "";

    // Check win condition
    if (playerChoice === computerChoice) {
        result = drawMessages[Math.floor(Math.random() * drawMessages.length)];
    } else {
        switch(playerChoice) {
            case "rock":
                if (computerChoice === "scissors") {
                    result = winMessage
                    playerScore++;
                    playerScoreDisplay.textContent = playerScore;
                } else {
                    result = loseMessage
                    computerScore++;
                    computerScoreDisplay.textContent = computerScore;
                }
                break;
            case "paper":
                if (computerChoice === "rock") {
                    result = winMessage
                    playerScore++;
                    playerScoreDisplay.textContent = playerScore;
                } else {
                    result = loseMessage
                    computerScore++;
                    computerScoreDisplay.textContent = computerScore;
                }
                break;
            case "scissors":
                if (computerChoice === "paper") {
                    result = winMessage
                    playerScore++;
                    playerScoreDisplay.textContent = playerScore;
                } else {
                    result = loseMessage
                    computerScore++;
                    computerScoreDisplay.textContent = computerScore;
                }
                break;
        }
    }

    //Edit Document
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;
}