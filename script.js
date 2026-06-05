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
        return `It's a tie! You both chose ${humanChoice}`;
    } else if 
        (
            (humanChoice === 'rock' && computerChoice === 'scissors') || 
            (humanChoice === 'scissors' && computerChoice === 'paper') || 
            (humanChoice === 'paper' && computerChoice === 'rock') 
        ) 
        {
            return `Congrats!!! ${humanChoice} beats ${computerChoice}`;
    } else {
        return `You lose!!! ${computerChoice} beats ${humanChoice}`;
    }
}

const playGame = () => {
    let computerScore = 0
    let humanScore = 0

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice;

        do {
            humanChoice = getHumanChoice();
        } while (humanChoice === null);

        
        let result = playRound(humanChoice, computerChoice);
        if (result.includes('Congrats')) humanScore++;
        if (result.includes('lose')) computerScore++;
        console.log(result);
        
    }


    if (humanScore > computerScore) {
        return `Human wins ${humanScore} - ${computerScore}`
    } else if (humanScore === computerScore) {
        return `It's a tie! ${humanScore} draw`
    } else {
        return `Computer wins ${computerScore} - ${humanScore}`
    }
}

console.log(playGame());