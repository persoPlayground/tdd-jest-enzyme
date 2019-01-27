import { CORRECT } from '../actions/constants';
export default (state =false, action ) => {

    switch(action.type) {
        case CORRECT:
        return true
        default:
        return state
    }
}