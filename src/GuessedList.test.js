import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkPropT } from './test-util';
import GuessedList from './GuessedList';

const expectedProps = { wordsList: [{word: 'test', letterMatchCount: 2}] };
const setupWrapper = (props = {} ) => {
    const defaultProps = { ...expectedProps, ...props}
 return  shallow(<GuessedList {...defaultProps } />)
}
describe('List of guessed words', () => {

    it('renders with no errors', () => {
        const wrapper = setupWrapper(expectedProps);
        expect(findByTestAttr(wrapper, 'guessed-list').length).toEqual(1);
    });

    it('renders with no warnings with props', () => {
        const wrapper = setupWrapper(expectedProps);
        const propError = checkPropT(wrapper, expectedProps);
        expect(propError).toBeUndefined();
    });
});
describe('If no guessed words', () => {
    let wrapper;
    beforeEach(() => {
         wrapper = setupWrapper({ wordsList: []});
    })

    it('renders with no errors', () => {
        expect(findByTestAttr(wrapper, 'guessed-list').length).toEqual(1);
    });

    it('renders construction to guess the word', () => {
       const instruction =findByTestAttr(wrapper, 'instructions');
       expect(instruction.text().length).not.toEqual(0);
       
    });
});
describe('If 1 or more guessed words', () => {
    let wrapper;
    const expectedProps = { wordsList: [{word: 'test', letterMatchCount: 1}, {word: 'test', letterMatchCount: 2}, {word: 'test', letterMatchCount: 3}] };
    beforeEach(() => {
         wrapper = setupWrapper(expectedProps);
    })
    it('renders with no errors', () => {
        const list =findByTestAttr(wrapper, 'component-list');
       expect(list.length).toEqual(1);
    });

    it('renders `words` section', () => {
        const words =findByTestAttr(wrapper, 'words');
        expect(words.length).toEqual(1);
    });
    it('renders correct number of words', () => {
        const word =findByTestAttr(wrapper, 'word-try');
        expect(word.length).toEqual(expectedProps.wordsList.length);
    });
});