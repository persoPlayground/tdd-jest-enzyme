import { GETSECRET } from '../actions/constants';
export default (state = null, action) => {
    switch(action.type) {
        case GETSECRET:
        return action.secret
        default:
        return state
    }
}