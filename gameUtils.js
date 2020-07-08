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

