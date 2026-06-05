// console.log('Hello World');
let computerScore = 0
let humanScore = 0

const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) return 'rock';
    if (computerChoice === 1) return 'paper';
    if (computerChoice === 2) return 'scissors';
};

const getHumanChoice = () => {
    const humanChoice = prompt('Please make a choice between [rock, paper, scissors]');
    if (humanChoice === null || humanChoice === '') return null;
    return humanChoice;
}

const playRound = (humanChoice, computerChoice) => {
    humanChoice = humanChoice.toLowerCase().trim();
    if (humanChoice === computerChoice) {
        return `It's a tie! You both chose${humanChoice}`
    } else if 
        (
            (humanChoice === 'rock' && computerChoice === 'scissors') || 
            (humanChoice === 'scissors' && computerChoice === 'paper') || 
            (humanChoice === 'paper' && computerChoice === 'rock') 
        ) 
        {
            humanScore++;
            return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++
        return `You lose! ${computerChoice} beats ${humanChoice}`
    }
}

const humanSelection = getHumanChoice();
if (humanSelection !== null) {
    console.log(playRound(humanSelection, getComputerChoice()));
}
