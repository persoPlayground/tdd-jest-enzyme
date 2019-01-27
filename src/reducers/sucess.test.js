import sucessReducer from './success';
import { CORRECT } from '../actions/constants';

describe('success reducer', () => {
    const actionSuccess = { type: CORRECT };
    test('return default state `false`', () => {
        expect(sucessReducer(undefined, {})).toBe(false)
    });
    test('return success state', () => {
        expect(sucessReducer(undefined, actionSuccess)).toBe(true)
    });
})