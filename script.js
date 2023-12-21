let results = [];
const choices = [`scissors`, `paper`, `rock`];
let computer = 0;
let player = 0;

const computerselection = () => choices[Math.floor(Math.random()*3)];

const playround = (playerChoice, numb, computerChoice = computerselection()) => {
    if (computerChoice === `rock` && playerChoice === 'scissors') {
        results.push(`round ${numb}, the computer wins`);
        computer ++;

    } else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        esults.push(`round ${numb}, the player wins`);
        player ++;

    } else if (computerChoice === 'rock' && playerChoice === 'paper') {
        results.push(`round ${numb}, the player wins`);
        player ++;

    } else if (computerChoice === `paper` && playerChoice ===`scissors`) {
        results.push(`round ${numb}, the player wins`);
        player ++;
    
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        results.push(`round ${numb}, the computer wins`);
        computer ++;
    
    } else if (computerChoice === `paper` && playerChoice ===`rock`) {
        results.push(`round ${numb}, the computer wins`);
        computer ++;
    
    } else if (computerChoice === computerChoice) {
        let playerInput = prompt(`what is your choice? `);
        playround(playerInput, numb);
    }
};

const game = () => {
    let counter = 1;

    for (let i = 0; i < 5; i++) {
        let playerInput = prompt(`what is your choice? `);
        playround(playerInput, counter);
        counter++;
    };

    (computer > player) ? console.log(`the computer wins the whole game, ${computer} to the computer and ${player} to the player`):
    console.log(`the player wins the whole game, ${computer} to the computer and ${player} to the player`);
    console.log(results)
};


game()
