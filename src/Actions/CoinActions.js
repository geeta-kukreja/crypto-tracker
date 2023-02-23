import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { COIN_FORM_NAME_CHANGED , COIN_FORM_DATE_CHANGED , COIN_FORM_QUANTITY_CHANGED , COIN_FORM_PRICE_CHANGED , COIN_SAVE_SUCCESS , COIN_FETCH_SUCCESS } from './types';

export const coinFormNameChanged = text => {
    return {
        type :  COIN_FORM_NAME_CHANGED ,
        payload : text 
    };
};

export const coinFormDateChanged = text => {
    return {
        type :  COIN_FORM_DATE_CHANGED ,
        payload : text 
    };
};

export const coinFormQuantityChanged = text => {
    return {
        type :  COIN_FORM_QUANTITY_CHANGED ,
        payload : text 
    };
};

export const coinFormPriceChanged = text => {
    return {
        type :  COIN_FORM_PRICE_CHANGED ,
        payload : text 
    };
};

export const coinCreate = ({ coin_name , date , quantity , price }) =>{
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/coinsdata`)
        .push({ coin_name , date , quantity , price })
        .then(() =>{ 
          dispatch({ type : COIN_SAVE_SUCCESS }); 
          Actions.pop();
        })
    };
};

export const coinFetch = () =>{
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/coinsdata`)
    .on('value' , snapshot => { 
        dispatch({
                   type : COIN_FETCH_SUCCESS ,
                   payload : snapshot.val()
                });
                             }
)
};
};


export const coinSave = ({ coin_name , date , quantity , price , uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/coinsdata/${uid}`)
    .set({ coin_name , date , quantity , price })
    .then(() => {
                dispatch({ type : COIN_SAVE_SUCCESS }); 
                Actions.pop();
                });
    };
};


export const coinDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();
    return () => {
    firebase.database().ref(`/users/${currentUser.uid}/coinsdata/${uid}`)
    .remove()
    .then(()=> Actions.pop());
    };
};

