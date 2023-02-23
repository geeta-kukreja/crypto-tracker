import {
    COIN_FETCH_SUCCESS
} from '../Actions/types';

const INITITAL_STATE = {};

export default ( state = INITITAL_STATE , action ) => {
        switch(action.type){
            case COIN_FETCH_SUCCESS:
                return action.payload;
            default:
                return state;
        }
};