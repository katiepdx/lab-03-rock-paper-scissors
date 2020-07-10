import { getRandomThrow, checkResult } from './gameUtils.js';

// import functions and grab DOM elements

const playButton = document.querySelector('.button');
const resetButton = document.querySelector('.reset-button');

const roundResults = document.querySelector('.round-results');
const computersResults = document.querySelector('.computers-result');
const playersWins = document.querySelector('.players-wins');
const playersLosses = document.querySelector('.players-losses');
const totalDraws = document.querySelector('.total-draws');
const totalRounds = document.querySelector('.total-rounds');
const totalScoreResets = document.querySelector('.total-score-resets');


// Initialize Global State 
let userWins = 0;
let userLosses = 0;
let gameDraws = 0;
let totalGameRounds = 0;
let gameResets = 0;

// Game functionality
playButton.addEventListener('click', () => {
    totalGameRounds++;
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
        userWins++;
        playersWins.textContent = userWins;
    } else if (oneRoundResult === 'You lose!') {
        userLosses++;
        playersLosses.textContent = userLosses;
    } else if (oneRoundResult === 'It is a draw!') {
        gameDraws++;
        totalDraws.textContent = gameDraws;
    }
});

// Reset all scores button
resetButton.addEventListener('click', () => {
    let confirmReset = confirm('Are you sure you want to reset all scores?');
    if (confirmReset === true) {
        gameResets++;
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

