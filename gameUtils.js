// functions to export go here
export function getRandomThrow(){
    let randomNumber = Math.random();
    if ((randomNumber > 0) && (randomNumber < 0.33)) {
        return 'rock';
    } else if ((randomNumber > 0.33) && (randomNumber < 0.66)) {
        return 'paper';
    } else if ((randomNumber > 0.33) && (randomNumber < 1)) {
        return 'scissors';
    }
}
 
export function checkResult(computersChoice, playersChoice) {
    if (computersChoice === playersChoice) {
        return ('It is a draw!');
    } else if (computersChoice === 'paper' && playersChoice === 'rock') {
        return ('You lose!');
    } else if (computersChoice === 'scissors' && playersChoice === 'rock') {
        return ('You win!');
    } else if (computersChoice === 'rock' && playersChoice === 'paper') {
        return ('You win!'); 
    } else if (computersChoice === 'scissors' && playersChoice === 'paper') {
        return ('You lose!'); 
    } else if (computersChoice === 'rock' && playersChoice === 'scissors') {
        return ('You lose!');
    } else if (computersChoice === 'paper' && playersChoice === 'scissors') {
        return ('You win!'); 
    }
}