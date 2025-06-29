/* 
create a function called getComputerChoice to return either 
rock, paper, or scissors.
*/
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
    console.log(computerChoice);
}

getComputerChoice();


// Create a variable and store the input from the user into the variable

const getHumanChoice = () => {
    let humanChoice = prompt('Please choose between \'ROCK\', \'PAPER\', \'SCISSORS\'');
    console.log(humanChoice);
}

getHumanChoice();