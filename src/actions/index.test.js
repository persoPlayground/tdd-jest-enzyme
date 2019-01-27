import { CORRECT } from './constants';
import { correctWord } from './';


describe('action creators', () => {
    test('correctWord', () => {
    const action = { type: CORRECT }
    expect(correctWord()).toEqual(action);
    });
})

