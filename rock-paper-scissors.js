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

// console.log(getComputerChoice());


// Step 3: Create a variable and store the input from the user into the variable

const getHumanChoice = () => {
    // name variable is humanChoice 
    // prompt the user to make a choice
    let humanChoice = prompt("Please choose between 'ROCK', 'PAPER', 'SCISSORS'");
    if (humanChoice !== null) {
        //convert human choice to lowercase 
        humanChoice = humanChoice.toLowerCase();
    } else {
        console.log('Game cancelled - no choice made!')
    }
    return humanChoice;
}


// Step 4: Declare the players scores 
let humanScore = 0;
let computerScore = 0;



// Step 5: Write the logic to play a single round
const playRound = (humanChoice, computerChoice) => {
    // tie condition
    if (humanChoice === computerChoice) {
        return "It's a tie";
    }
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


    // Human chooses paper
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


    // Human chooses scissors
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

