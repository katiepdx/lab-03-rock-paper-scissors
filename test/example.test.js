// IMPORT MODULES under test here:
import { getRandomThrow, checkResult } from '../gameUtils.js';

const test = QUnit.test;

test('this will test if the getRandomThrow function returns a string', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected1 = 'string';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = typeof(getRandomThrow());

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected1);
});

test('this will test if the checkResult function logic is correct for all ROCK scenarios', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const usersChoice1 = 'rock';
    const usersChoice2 = 'paper';
    const usersChoice3 = 'scissors';
    const fixedComputersChoice = 'rock';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = checkResult(fixedComputersChoice, usersChoice1);
    const actual2 = checkResult(fixedComputersChoice, usersChoice2);
    const actual3 = checkResult(fixedComputersChoice, usersChoice3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, 'It is a draw!');
    expect.equal(actual2, 'You win!');
    expect.equal(actual3, 'You lose!');
});

test('this will test if the checkResult function logic is correct for all PAPER scenarios', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const usersChoice1 = 'rock';
    const usersChoice2 = 'paper';
    const usersChoice3 = 'scissors';
    const fixedComputersChoice = 'paper';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = checkResult(fixedComputersChoice, usersChoice1);
    const actual2 = checkResult(fixedComputersChoice, usersChoice2);
    const actual3 = checkResult(fixedComputersChoice, usersChoice3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, 'You lose!');
    expect.equal(actual2, 'It is a draw!');
    expect.equal(actual3, 'You win!');
});

test('this will test if the checkResult function logic is correct for all SCISSORS scenarios', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const usersChoice1 = 'rock';
    const usersChoice2 = 'paper';
    const usersChoice3 = 'scissors';
    const fixedComputersChoice = 'scissors';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = checkResult(fixedComputersChoice, usersChoice1);
    const actual2 = checkResult(fixedComputersChoice, usersChoice2);
    const actual3 = checkResult(fixedComputersChoice, usersChoice3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, 'You win!');
    expect.equal(actual2, 'You lose!');
    expect.equal(actual3, 'It is a draw!');
});