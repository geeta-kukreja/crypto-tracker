import { COIN_FORM_DATE_CHANGED , COIN_FORM_NAME_CHANGED , COIN_FORM_QUANTITY_CHANGED , COIN_FORM_PRICE_CHANGED, COIN_SAVE_SUCCESS } from '../Actions/types';

const INITIAL_STATE = {
    coin_name : '',
    date : '',
    quantity : '',
    price :''
}

export default (state = INITIAL_STATE , action ) => {
    switch(action.type){
        case COIN_FORM_NAME_CHANGED :
            return { ...state , coin_name : action.payload }
        
        case COIN_FORM_DATE_CHANGED:
            return { ...state , date : action.payload }

        case COIN_FORM_QUANTITY_CHANGED:
            return { ...state , quantity : action.payload }

        case COIN_FORM_PRICE_CHANGED :
            return { ...state , price : action.payload }
        
        case COIN_SAVE_SUCCESS :
            return INITIAL_STATE;
            
        default :
            return state;
    }
};