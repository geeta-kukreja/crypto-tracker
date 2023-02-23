import React, { Component } from 'react';
import { Container, Tab, Tabs, ScrollableTab ,View } from 'native-base';
import Feed from './src/Feed';
import Portfolio from './src/Portfolio';
import {
  Text,
} from 'react-native';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import { HeaderSection } from './src/components';
import reducers from './src/Reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';

class App extends Component {
  render() {
    return (  
    <Provider  store = { createStore(reducers , {  } , applyMiddleware(ReduxThunk)) } >
    <Container style={styles.contentContainer}>
    <HeaderSection/>
    <ScrollableTabView
          initialPage={0}
          style={styles.container}
          tabBarBackgroundColor="#0E1019"
          tabBarActiveTextColor="#02E1E2"
          tabBarInactiveTextColor="grey"
          tabBarUnderlineStyle={{backgroundColor:'#fd8763',height:3}}
          renderTabBar={() => <DefaultTabBar name="CryptoTracker"/>}
        >
      <Feed tabLabel="Home" />  
      <Portfolio tabLabel='PortFolio'/>
  </ScrollableTabView>
  </Container>
  </Provider>
    );
  }
};

const styles = {
  container: {
    marginTop: 2,
  },
  contentContainer: {
      backgroundColor: "#fd8763",
  }
}


export default App;