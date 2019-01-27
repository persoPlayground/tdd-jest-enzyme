import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { middlewares } from './store'

/**
* 
* @param {ShallowWrapper} wrapper 
* @param {string} val
* @returns { ShallowWrapper} 
*/
export const findByTestAttr = (wrapper, val ) => wrapper.find(`[data-test-id="${val}"]`);

export const checkPropT = (component, expectedProps) => checkPropTypes(component.propTypes, expectedProps, 'prop', component.name);

export const storeFactory = initialState => createStore(rootReducer, initialState, applyMiddleware(...middlewares));