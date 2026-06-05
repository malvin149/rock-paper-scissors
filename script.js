// console.log('Hello World');

const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) return 'rock';
    if (computerChoice === 1) return 'paper';
    if (computerChoice === 2) return 'scissors';
};

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
