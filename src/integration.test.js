import moxios from 'moxios';
import { storeFactory } from './test-util';
import { guessWord, getSecret } from './actions';
import { request } from 'http';

describe('guessWord action dispatcher', () => {
const secret = 'computer';
const unsuccessful = 'unit';
    describe('no guessed word', () => {
        let store;
        const initialState = { secret }
        beforeEach(() => {
            store = storeFactory(initialState);
        })
        test('update state for `sunuccessful` guess', () => {
            store.dispatch(guessWord(unsuccessful));
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [{
                    word: unsuccessful,
                    letterMatch: 2
                }]
            }
            expect(store.getState()).toEqual(expectedState);
        })
        test('update state for `successful` guess', () => {
            store.dispatch(guessWord(secret));
            const expectedState = {
                ...initialState,
                success: true,
                guessedWords: [{
                    word: secret,
                    letterMatch: 8
                }]
            }
            expect(store.getState()).toEqual(expectedState);
        })
    });
});

describe('action getSecret', () => {
    beforeEach(() => {
        moxios.install();
       
    });
    afterEach(() => {
        moxios.uninstall();
    });
    test('get secret and add to state', () => {
        const secret = 'computer';
        const store = storeFactory();

        moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
            status: 200,
            response: secret
        });
        });
        return store.dispatch(getSecret())
        .then(() => {
            const newState = store.getState();
            expect(newState.secret).toBe(secret);
        })
   
    });
});