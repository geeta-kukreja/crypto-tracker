import React , { Component } from 'react';
import { View , Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import reducers from './Reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Router from './Router';
import Spinner from 'react-native-loading-spinner-overlay';

class Portfolio extends Component{
    constructor() {
        super();
      }


    componentWillMount(){
        const config = {
            apiKey: "AIzaSyARicIrVamSe06WHz9vvARXhaG9qMWPbDs",
            authDomain: "cryptotracker-13308.firebaseapp.com",
            databaseURL: "https://cryptotracker-13308.firebaseio.com",
            projectId: "cryptotracker-13308",
            storageBucket: "cryptotracker-13308.appspot.com",
            messagingSenderId: "543090078644"
          };
          firebase.initializeApp(config);
    }

   
    render()
    {
        return (
            <Provider store = { createStore(reducers , {  } , applyMiddleware(ReduxThunk)) } >
            
            <Router />
            </Provider>
        );
    }
}

export default Portfolio;