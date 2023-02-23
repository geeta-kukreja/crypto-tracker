import React , { Component } from 'react';
import { View , Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import RootReducer from './Reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { CryptoContainer } from './components';
import Store from './Store';

class Feed extends Component {
  render() {
    return (
      <Provider store={Store}>
          <CryptoContainer />
      </Provider>
    );
  }
}


export default Feed;