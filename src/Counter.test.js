import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from './test-util';
import Counter from './Counter';

/**
 * 
 * @param {object} props 
 * @param {object} state
 * @returns { ShallowWrapper } 
 */
const initialSetup = (props={}, state=0) => {
    const wrapper = shallow(<Counter {...props} />)
    if(state) {
        wrapper.setState(state);
    }
    return wrapper;
};

describe('simple counter', () => {
    describe('renders', () => {
        let wrapper = initialSetup();
        it('renders without error', () => {  
            expect(findByTestAttr(wrapper,'component-counter').length).toEqual(1);
           });
        it('renders the Inc button', () => {
            expect(findByTestAttr(wrapper,'inc-button').length).toEqual(1);
         });
         it('renders the Inc button', () => {
            expect(findByTestAttr(wrapper,'dec-button').length).toEqual(1);
         });

        it('renders counter display', () => {
            expect(findByTestAttr(wrapper,'counter-display').length).toEqual(1);
                 });
                 it('counters starts at 0 counter display', () => {
              expect(wrapper.state().count).toEqual(0);
      });         
    });
  describe('click buttons', () => {

      describe('increment', () => { 
        let wrapper = initialSetup();
          it('click increments state', () => {
              const incButton = findByTestAttr(wrapper,'inc-button');
               incButton.simulate('click');
               wrapper.update();
               expect(wrapper.state().count).toEqual(1);
       
               const wrapperWithState = initialSetup({}, {count: 3 });
               const incButtonWithState = findByTestAttr(wrapperWithState,'inc-button');
               incButtonWithState.simulate('click');
               wrapperWithState.update();
               expect(wrapperWithState.state().count).toEqual(4);
           });
           it('click inc update display', () => {
               const display = findByTestAttr(wrapper,'counter-display');
               const incButton = findByTestAttr(wrapper,'inc-button');
               incButton.simulate('click');
               wrapper.update();
               expect(display.text()).toContain(1);
           });
      });
      describe('decrement', () => { 
        
          it('click dec state', () => {

               const wrapperWithState = initialSetup({}, {count: 8 });
               const decButtonWithState = findByTestAttr(wrapperWithState,'dec-button');
               decButtonWithState.simulate('click');
               wrapperWithState.update();
               expect(wrapperWithState.state().count).toEqual(7);
           });
           it('click inc update display', () => {
            const wrapper = initialSetup();
               const display = findByTestAttr(wrapper,'counter-display');
               const decButton = findByTestAttr(wrapper,'dec-button');
               decButton.simulate('click');
               wrapper.update();
               expect(display.text()).toContain(0);
           });
           it('min value is 0', () => {
            const wrapperWithState = initialSetup({}, {count: 1 });
            const decButtonWithState = findByTestAttr(wrapperWithState,'dec-button');
            decButtonWithState.simulate('click');
            wrapperWithState.update();
            decButtonWithState.simulate('click');
            wrapperWithState.update();
            expect(wrapperWithState.state().count).toEqual(0);
            const wrapper = initialSetup();
            const display = findByTestAttr(wrapper,'counter-display');
            const decButton = findByTestAttr(wrapper,'dec-button');
            decButton.simulate('click');
            wrapper.update();
            expect(display.text()).toContain(0);
           });
      });
    
  });
  
       
});
