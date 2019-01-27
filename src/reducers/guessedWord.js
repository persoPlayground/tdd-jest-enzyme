import { GUESS } from '../actions/constants';
export default (state = [], action) => {
    switch(action.type) {
        case GUESS:
        return [...state, action.payload ]
        default:
        return [];
    }
}
