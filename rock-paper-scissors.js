
// Step 2: create a function called getComputerChoice to return either rock, paper, or scissors.

const getComputerChoice = () => {
    // generate random number from 0 to 2
    let computerChoice = Math.random()* 3;
    // round up to whole number
    computerChoice = Math.floor(computerChoice)
    if (computerChoice == 0) {
        // if random number is 0 return rock
        computerChoice = 'rock';
    } else if (computerChoice == 1) {
        // if random number is 0 return paper
        computerChoice = 'paper';
    } else {
        // else return scissors, the last choice 
        computerChoice = 'scissors';
    }
    return computerChoice;
}


// Step 3: get human input with function getHumanChoice that stores the value in a named variable humanChoice

const getHumanChoice = () => {
    // name variable is humanChoice 
    // prompt the user to make a choice
    let humanChoice = prompt("Please choose between 'ROCK', 'PAPER', 'SCISSORS'");
    if (humanChoice !== null) {
        //humanChoice made case-insensitive. Automatically convert any input variation to lowercase 
        humanChoice = humanChoice.toLowerCase();
    } else {
        // for when the human presses cancel. the game will not be executed
        console.log('Game cancelled - no choice made!')
    }
    return humanChoice;
}


// Step 4: Declare the players scores 
let humanScore = 0;
let computerScore = 0;



// Step 6 logic to play the entire game;
const playGame = () => {
    
    // step 5 
    // Create a function named playRound humanChoice and computerChoice: parameters to be passed in the function
    const playRound = (humanChoice, computerChoice) => {
        // tie condition if human choice is equal to computer choice
        if (humanChoice === computerChoice) {
            return "It's a tie";
        }

        //returns a string value representing the round winner
        // Human chooses rock
        if (humanChoice === "rock") {
            // and computer chooses scissors
            if (computerChoice === 'scissors') {
                humanScore++;
                return "You win! Rock beats Scissors.";
            } else { 
                //you lose if computer chooses paper
                computerScore++
                return "You lose! Paper beats Rock.";
            }
        }
    
    
        // if human did not choose rock and chooses paper
        else if (humanChoice === "paper") {
            // and computer chooses rock
            if (computerChoice === "rock") {
                humanScore++;
                return "You win! Paper beats Rock.";
            } else {
                // you lose if computer chooses scissors
                computerScore++
                return "You lose! Scissors beats Paper.";
            }
        }
    
    
        // if human chooses neither rock nor paper and chooses scissors
        else if (humanChoice === "scissors") {
            // and computer chooses paper
            if (computerChoice === "paper") {
                humanScore++;
                return "You win! Scissors beats Paper.";
            } else {
                // you lose if computer chooses rock
                computerScore++
                return "You lose! Rock beats Scissors.";
            }
        }
        
    }

    
    console.log("---5 ROUND GAME OF ROCK PAPER SCISSORS---");
    
    // for loop to invoke the playRound() five times 
    for (let round = 1; round <= 5; round++) {
        console.log(`ROUND: ${round}`);
            
        // passed as argument for the playRound function
        const humanSelection = getHumanChoice();

        //if human makes no choice or cancels exit game
        if (humanSelection === null) {
            // exit the loop if human cancels
            return;
        } 
        
        // passed as argument for the playRound function
        const computerSelection = getComputerChoice();

        console.log(`Computer chose: ${computerSelection}`);
        console.log(`You chose: ${humanSelection}`);
    

        //output the result of the round to the console
        const result = playRound(humanSelection, computerSelection);
        console.log(result);
            
        // output the current score for the round
        console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}\n`);
    }    
    
    
    // Declare the final winner
    console.log("Final Results");
        // decide the winner based on the score 
        // if humanscore if greater than computer score
        if (humanScore > computerScore) {
            console.log("CONGRATS! YOU WIN THE GAME!");
            // if human score is less than computer score
        } else if (humanScore < computerScore) {
            console.log("COMPUTER WINS THE GAME! Better luck next time!");
        } else {
            console.log("IT'S A TIE GAME!");
        }

    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}\n`);

}

// Invoke the function to play the five round game
playGame();