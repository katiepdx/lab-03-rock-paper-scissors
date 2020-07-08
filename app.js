import { getRandomThrow } from './gameUtils.js'

// import functions and grab DOM elements
const gameTiles = document.querySelector('.game-tiles');
console.log(gameTiles);

const playButton = document.querySelector('.button');

console.log(playButton);
const gameResults = document.querySelector('.game-results');

console.log(gameResults);
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
// let userWins = 0;
// let userLosses = 0;
// let gameDraws = 0;

let computersChoice = getRandomThrow();

// initialize state
playButton.addEventListener('click', () => {
    computersResults.textContent = getRandomThrow();

});


// set event listeners to update state and DOM