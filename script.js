const labels = ['Rock', 'Paper', 'Scissors'];
const container = document.querySelector('#container');
const scoreCard = document.querySelector('#scoreCard');
const humanScore = document.querySelector('#humanScore');
const computerScore = document.querySelector('#computerScore');
const btnContainer = document.querySelector('#btn-container');
const roundResult = document.querySelector('#roundResult');
const winner = document.querySelector('#winner');

let hmScore = 0;
let cpScore = 0;

const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) return 'Rock';
    if (computerChoice === 1) return 'Paper';
    if (computerChoice === 2) return 'Scissors';
};

const playRound = (humanChoice, computerChoice) => {
    humanChoice = humanChoice;
    if (humanChoice === computerChoice) {
        return `It's a tie! You both chose ${humanChoice}`;
    } else if 
        (
            (humanChoice === 'Rock' && computerChoice === 'Scissors') || 
            (humanChoice === 'Scissors' && computerChoice === 'Paper') || 
            (humanChoice === 'Paper' && computerChoice === 'Rock') 
        ) 
        {
            return `Congrats!!! ${humanChoice} beats ${computerChoice}`;
    } else {
        return `You lose!!! ${computerChoice} beats ${humanChoice}`;
    }
}

labels.forEach((label) => {
    const buttons = document.createElement('button');
    buttons.textContent = label;
    buttons.id = label;

    buttons.style.borderRadius = '8px';
    buttons.style.border = '1px solid #eee';

    btnContainer.appendChild(buttons);
})

const allBtn = document.querySelectorAll('button');

btnContainer.addEventListener('click', (e) => {
    let humanChoice = e.target.id;
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
    roundResult.textContent = result;
    if (result.includes('Congrats')) hmScore++;
    if (result.includes('lose')) cpScore++;

    humanScore.textContent = `Human Choice: ${humanChoice}. Score: ${hmScore}`;
    computerScore.textContent = `Computer Choice: ${computerChoice}. Score: ${cpScore}`;
    
    if (hmScore === 5 || cpScore === 5) {
        winner.textContent = `Game Over. Winner is: ${hmScore === 5 ? 'Human' : 'Computer'}`;
        allBtn.forEach(btn => btn.disabled = true);
    }

})
