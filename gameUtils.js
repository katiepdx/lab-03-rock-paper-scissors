// functions to export go here

//this will create a random number
    // If random number is between 0-0.33, return rock
    // If random number is between 0.33-0.66, return paper
    // If random number is between 66-1, return scissors
   
export function getRandomThrow(){
    let randomNumber = Math.random();
    if ((randomNumber > 0) && (randomNumber < 0.33)) {
        console.log('rock');
        return 'rock';
    } else if ((randomNumber > 0.33) && (randomNumber < 0.66)) {
        console.log('paper');
        return 'paper';
    } else if ((randomNumber > 0.33) && (randomNumber < 1)) {
        console.log('scissors');
        return 'scissors';
    }
}

// This function will take two arguments (computers choice  and players choice) and check who wins using if statements 

export function checkResult(computersChoice, playersChoice) {
    if (computersChoice === 'rock' && playersChoice === 'rock') {
        return ('It is a draw!');
    } else if (computersChoice === 'paper' && playersChoice === 'rock') {
        return ('You lose!');
    } else if (computersChoice === 'scissors' && playersChoice === 'rock') {
        return ('You win!');
    } else if (computersChoice === 'rock' && playersChoice === 'paper') {
        return ('You win!'); 
    } else if (computersChoice === 'paper' && playersChoice === 'paper') {
        return ('It is a draw!'); 
    } else if (computersChoice === 'scissors' && playersChoice === 'paper') {
        return ('You lose!'); 
    } else if (computersChoice === 'rock' && playersChoice === 'scissors') {
        return ('You lose!');
    } else if (computersChoice === 'paper' && playersChoice === 'scissors') {
        return ('You win!'); 
    } else if (computersChoice === 'scissors' && playersChoice === 'scissors') {
        return ('It is a draw!');   
    }
}