import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from './test-util';
import Message from './Message';
/**
 * 
 * @param {object} props 
 * @return {ShallowWrapper}
 */
const initialSetup = (props = {}) => shallow(<Message {...props} />);

describe('Message Component', () => {

    it('renders with no error', () => {
        const wrapper = initialSetup();
        expect(findByTestAttr(wrapper, 'message').length).toEqual(1);
    });
    it('renders no text if `success` props is false', () => {
        const wrapper = initialSetup({ success: false });
        expect(wrapper.text()).toEqual('');
    });
    it('renders with text if `success` props is true', () => {
        const wrapper = initialSetup({ success: true });
        expect(wrapper.text().length).not.toEqual(0);
    });
});