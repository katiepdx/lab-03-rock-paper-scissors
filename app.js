import { getRandomThrow, checkResult } from './gameUtils.js';

// import functions and grab DOM elements
const gameTiles = document.querySelector('.game-tiles');
console.log(gameTiles);

const playButton = document.querySelector('.button');

console.log(playButton);
const gameData = document.querySelector('.game-data');
console.log(gameData);
const roundResults = document.querySelector('.round-results');
console.log(roundResults);
const computersResults = document.querySelector('.computers-result');
console.log(computersResults);
const playersWins = document.querySelector('.players-wins');
console.log(playersWins);
const playersLosses = document.querySelector('.players-losses');
console.log(playersLosses);
const totalDraws = document.querySelector('.total-draws');
console.log(totalDraws);

// Global State 
let userWins = 0;
let userLosses = 0;
let gameDraws = 0;

// initialize state
playButton.addEventListener('click', () => {
    let computersChoice = getRandomThrow();
    let playerChecked = document.querySelector('input:checked');
    let playersChoice = playerChecked.value;
    computersResults.textContent = computersChoice;
    
    let oneRoundResult = checkResult(computersChoice, playersChoice);
    roundResults.textContent = oneRoundResult;
    if (oneRoundResult === 'You win!') {
        userWins = userWins + 1;
        console.log(userWins);
        playersWins.textContent = userWins;
    } else if (oneRoundResult === 'You lose!') {
        userLosses = userLosses + 1;
        playersLosses.textContent = userLosses;
    } else if (oneRoundResult === 'It is a draw!') {
        gameDraws = gameDraws + 1;
        totalDraws.textContent = gameDraws;
    }
});


// set event listeners to update state and DOM