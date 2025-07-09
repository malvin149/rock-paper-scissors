// SET INITIAL SCORES TO 0
let humanScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors']; // Computer chooses from this array

// SELECT DOM ELEMENTS
const gameButtons = document.querySelectorAll('.game-button');
const displayDiv = document.querySelector('.display-results');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');


// COMPUTER CHOICE DETERMINED RANDOMLY
const getComputerChoice = () => {
    const computerChoice = Math.floor(Math.random()* choices.length);
    return choices[computerChoice];
};

// DISABLE BUTTON FUNCTION 
const disableButtons = () => {
    gameButtons.forEach( button => {
        button.disabled = true;
    });
};

// GAME ROUND CONDITION 
const playRound = (humanChoice) => {
    const computerChoice = getComputerChoice(); // local variable to get computer score in the game round
    let roundMessage = '';

    if ( humanChoice === computerChoice ) {
        roundMessage = `It's a tie! You both chose ${humanChoice}.`
    } else if (
        ( humanChoice === 'rock' && computerChoice === 'scissors') ||
        ( humanChoice === 'paper' && computerChoice === 'rock') ||
        ( humanChoice === 'scissors' && computerChoice === 'paper') 
    ) {
        humanScore++;
        roundMessage = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        roundMessage = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    // UPDATE THE UI AFTER DETERMINING THE ROUND WINNER
    displayDiv.textContent = roundMessage;
    playerScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    // CHECK FOR GAME END CONDITON, FIRST TO 5 POINTS WINS 
    if ( humanScore === 5 ) {
        displayDiv.textContent += ' Game over! You reached 5 points first!';
        disableButtons();  // call this function to disable buttons after game end
    } else if ( computerScore === 5 ) {
        displayDiv.textContent += ' Game over! Computer reached 5 points first!';
        disableButtons();  // call this function to disable buttons after game end
    }
};

// HUMAN CHOICE DETERMINED BY CLICK
gameButtons.forEach( button => {
    button.addEventListener('click', (event) => {
        const humanChoice = event.target.textContent.toLowerCase();
        playRound(humanChoice);
    });
});

