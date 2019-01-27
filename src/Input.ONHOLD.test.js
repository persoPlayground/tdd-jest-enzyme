import React from 'react';
import {Provider} from 'react-redux'
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from './test-util';
import Input, { _Input } from './Input';

const initialSetup = (props={}) => {
    const store = storeFactory(props);
    const wrapper = shallow(<_Input {...props}  />);
    return wrapper;
}

describe('Render Input Component', () => {
    let wrapper;
    beforeEach(() => {
         wrapper = initialSetup({success: false});
    });
    test('renders with no error', () => {
       expect(findByTestAttr(wrapper, 'input-component').length).toEqual(1);
    });
     describe('word has not been guessed', () => { 
         test('renders Input', () => {
            expect(findByTestAttr(wrapper, 'input-box').length).toEqual(1);
         })
         test('renders submit button', () => {
            expect(findByTestAttr(wrapper, 'input-submit').length).toEqual(1);
         });
     });
       
     describe('word has been guessed', () => {
        test('doesn not renders Input', () => {
            wrapper.setProps({success: true});
            expect(findByTestAttr(wrapper, 'input-box').length).toEqual(0);
        })
        test('renders submit button', () => {
            wrapper.setProps({success: true});
            expect(findByTestAttr(wrapper, 'input-submit').length).toEqual(0);
        })
    });
});

describe('Redux props', () => {
    test('has `success` piece of state as prop', () => {
       const success = true;
       const wrapper = initialSetup({success});
       const successProp = wrapper.instance().props.success;
      expect(successProp).toBe(success)
    })
});
