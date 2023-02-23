import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CryptoReducer from './CryptoReducer';
import CoinReducer from './CoinReducer';
import CoinFormReducer from './CoinFormReducer';

export default combineReducers({
    crypto: CryptoReducer,
    auth : AuthReducer ,
    coinsForm : CoinFormReducer ,
    coinsdata : CoinReducer ,
   
   });

