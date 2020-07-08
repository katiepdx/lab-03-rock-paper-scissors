// IMPORT MODULES under test here:
import { getRandomThrow } from '../gameUtils.js';

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
