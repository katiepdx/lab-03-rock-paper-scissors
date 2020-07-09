// IMPORT MODULES under test here:
import { getRandomThrow, checkResult } from '../gameUtils.js';

const test = QUnit.test;

test('this will test that the getRandomThrow function returns a string', (expect) => {
    //Arrange
    // Expected result
    const expected = 'string';
    
    //Act 
    // Variable actual calls operator typeof for function getRandomThrow
    const actual = typeof(getRandomThrow());

    //Expect
    // Actual will return 'string' and match expected
    expect.equal(actual, expected);
});

test('this will test if the checkResult function logic is correct for all ROCK scenarios', (expect) => {
    //Arrange
    // Setting possible user choices to variables and adding fixed computer choice
    const usersChoice1 = 'rock';
    const usersChoice2 = 'paper';
    const usersChoice3 = 'scissors';
    const fixedComputersChoice = 'rock';
    
    //Act 
    // Using function checkResult to determine actual
    const actual1 = checkResult(fixedComputersChoice, usersChoice1);
    const actual2 = checkResult(fixedComputersChoice, usersChoice2);
    const actual3 = checkResult(fixedComputersChoice, usersChoice3);

    //Expect
    // Comparing actual with the predicted results
    expect.equal(actual1, 'It is a draw!');
    expect.equal(actual2, 'You win!');
    expect.equal(actual3, 'You lose!');
});

test('this will test if the checkResult function logic is correct for all PAPER scenarios', (expect) => {
    //Arrange
    // Setting possible user choices to variables and adding fixed computer choice
    const usersChoice1 = 'rock';
    const usersChoice2 = 'paper';
    const usersChoice3 = 'scissors';
    const fixedComputersChoice = 'paper';
    
    //Act 
    // Using function checkResult to determine actual
    const actual1 = checkResult(fixedComputersChoice, usersChoice1);
    const actual2 = checkResult(fixedComputersChoice, usersChoice2);
    const actual3 = checkResult(fixedComputersChoice, usersChoice3);

    //Expect
    // Comparing actual with the predicted results
    expect.equal(actual1, 'You lose!');
    expect.equal(actual2, 'It is a draw!');
    expect.equal(actual3, 'You win!');
});

test('this will test if the checkResult function logic is correct for all SCISSORS scenarios', (expect) => {
    //Arrange
    // Setting possible user choices to variables and adding fixed computer choice
    const usersChoice1 = 'rock';
    const usersChoice2 = 'paper';
    const usersChoice3 = 'scissors';
    const fixedComputersChoice = 'scissors';
    
    //Act 
    // Using function checkResult to determine actual
    const actual1 = checkResult(fixedComputersChoice, usersChoice1);
    const actual2 = checkResult(fixedComputersChoice, usersChoice2);
    const actual3 = checkResult(fixedComputersChoice, usersChoice3);

    //Expect
    // Comparing actual with the predicted results
    expect.equal(actual1, 'You win!');
    expect.equal(actual2, 'You lose!');
    expect.equal(actual3, 'It is a draw!');
});