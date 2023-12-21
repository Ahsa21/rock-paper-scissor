let results = [];
const choices = [`scissors`, `paper`, `rock`];
let computer = 0;
let player = 0;

const computerselection = () => choices[Math.floor(Math.random()*3)];

const playround = (playerChoice, numb, computerChoice = computerselection()) => {
    if (computerChoice === `rock` && playerChoice === 'scissors') {
        results.push(`round ${numb}, the computer wins`);
        computer ++;

    } else if (computerChoice === 'scissors' && playerchoice === 'rock') {
        esults.push(`round ${numb}, the player wins`);
        player ++;

    } else if (computerChoice === 'rock' && playerchoice === 'paper') {
        results.push(`round ${numb}, the player wins`);
        player ++;

    } else if (computerChoice === `paper` && playerchoice ===`scissors`) {
        results.push(`round ${numb}, the player wins`);
        player ++;
    
    } else if (computerChoice === 'scissors' && playerchoice === 'paper') {
        results.push(`round ${numb}, the computer wins`);
        computer ++;
    
    } else if (computerChoice === `paper` && playerchoice ===`rock`) {
        results.push(`round ${numb}, the computer wins`);
        computer ++;
    
    } else if (computerChoice === computerChoice) {
        let playerInput = prompt(`what is your choice? `);
        playround(playerInput, numb);
    }
};