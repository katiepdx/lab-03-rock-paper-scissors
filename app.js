import { getRandomThrow, checkResult } from './gameUtils.js';

// import functions and grab DOM elements
const gameTiles = document.querySelector('.game-tiles');
console.log(gameTiles);

const playButton = document.querySelector('.button');
const resetButton = document.querySelector('.reset-button');

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
const totalRounds = document.querySelector('.total-rounds');
console.log(totalRounds);
const totalScoreResets = document.querySelector('.total-score-resets');
console.log(totalScoreResets);


// Initialize Global State 
let userWins = 0;
let userLosses = 0;
let gameDraws = 0;
let totalGameRounds = 0;
let gameResets = 0;

// set event listeners to update state and DOM
playButton.addEventListener('click', () => {
    totalGameRounds = totalGameRounds + 1;
    totalRounds.textContent = totalGameRounds;

    let computersChoice = getRandomThrow();
    let playerChecked = document.querySelector('input:checked');
    // Reminds user to make a choice if no choice is selected
    if (playerChecked === null) {
        alert('Please make a choice');
        return;
    }

    let playersChoice = playerChecked.value;
    computersResults.textContent = computersChoice;
    
    let oneRoundResult = checkResult(computersChoice, playersChoice);
    roundResults.textContent = oneRoundResult;
    if (oneRoundResult === 'You win!') {
        userWins = userWins + 1;
        playersWins.textContent = userWins;
    } else if (oneRoundResult === 'You lose!') {
        userLosses = userLosses + 1;
        playersLosses.textContent = userLosses;
    } else if (oneRoundResult === 'It is a draw!') {
        gameDraws = gameDraws + 1;
        totalDraws.textContent = gameDraws;
    }
});

// Reset all scores button
// set event listeners to update state and DOM
resetButton.addEventListener('click', () => {
    // reset scores on click
    let confirmReset = confirm('Are you sure you want to reset all scores?');
    if (confirmReset === true) {
        gameResets = gameResets + 1;
        totalScoreResets.textContent = gameResets;
        
        userWins = 0;
        playersWins.textContent = userWins;

        userLosses = 0;
        playersLosses.textContent = userLosses;

        gameDraws = 0;
        totalDraws.textContent = gameDraws;

        totalGameRounds = 0;
        totalRounds.textContent = totalGameRounds;
    } else {
        return;
    }
});

