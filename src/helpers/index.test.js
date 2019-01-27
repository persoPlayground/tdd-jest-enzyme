import { matchLettersCount } from './';

describe('matchLettersCount', () => {
    const secretWord = 'computer';
   let guessedword = ''
   
    test('there is no match', () => {
        guessedword = 'unit';
        expect(matchLettersCount(guessedword, secretWord)).toEqual(2);
    })
    test('2 matchs', () => {
         guessedword = 'compute';
        expect(matchLettersCount(guessedword, secretWord)).toEqual(7);
    })
    test('handle duplicates', () => {
        guessedword = 'compuute';
        expect(matchLettersCount(guessedword, secretWord)).toEqual(7);
    })
   
})