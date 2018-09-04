const exercise = require('../exercise1');

describe('fizzBuzz', () => {
    it('throw error if not a number', () => {
        
        expect(() => { exercise.fizzBuzz('abc') }).toThrow();
    });
    it('return fizzBuzz if input % 3 and % 5 === 0', () => {
        let result = exercise.fizzBuzz(15);
        expect(result).toBe('FizzBuzz');
    });
    it('return Fizz if input % 3 === 0', () => {
        let result = exercise.fizzBuzz(9);
        expect(result).toBe('Fizz');
    });
    it('return Buzz if input % 5 === 0', () => {
        let result = exercise.fizzBuzz(25);
        expect(result).toBe('Buzz');
    });
    it('none of the above (other)', () => {
        let result = exercise.fizzBuzz(61);
        expect(result).toBe(61);
    });
})