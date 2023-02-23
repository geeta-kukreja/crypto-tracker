import React from 'react';
import { Router , Scene , Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import CoinAdd from './components/CoinAdd';
import CoinList from './components/CoinList';
import SignUpForm from './components/SignUpForm';

const RouterComponent = () => {
    return(
        <Router> 
            <Scene key = 'root' cardStyle={{backgroundColor: '#24292E'}} hideNavBar>
                <Scene key = 'Login' initial >
                    <Scene
                         key = 'LoginForm'
                         component = { LoginForm }
                         initial
                         hideNavBar = { false }
                         title = 'Login'
                         titleStyle = {styles.titleStyle}
                         navigationBarStyle={{ backgroundColor: '#24292E'}}
                         
                    />
                    
                </Scene>
                
                <Scene key = 'SignUp'>
                    <Scene 
                        key = 'SignUpForm'
                        component = { SignUpForm}
                        initial
                        hideNavBar = { false }
                        title = 'SignUp'
                        titleStyle = {styles.titleStyle}
                        navigationBarStyle={{ backgroundColor: '#24292E'}}
                    />
                </Scene>

                <Scene key="main" >
                   <Scene 
                         key = 'CoinList'
                         component = { CoinList  }
                         hideNavBar = { false }
                         title = "Coin List"
                         titleStyle = {styles.titleStyle}
                         rightTitle = 'ADD'

                         leftTitle = 'LOGOUT'
                         onLeft = { () => Actions.Login() }
                         leftButtonTextStyle = { styles.buttonTitleStyle }
                         leftButtonTextStyle ={styles.titleStyle}
                         
                         onRight = { () => Actions.coinCreate() }
                         rightButtonTextStyle = { styles.buttonTitleStyle }
                         navigationBarStyle={{ backgroundColor: '#24292E'}}
                         rightButtonTextStyle ={styles.titleStyle}

                         
                    />
                </Scene>

                
                <Scene
                    key = "coinCreate"
                    component = { CoinAdd }
                    title = "Coin Add"
                    hideNavBar = { false }
                    titleStyle = {styles.titleStyle}
                    navigationBarStyle={{ backgroundColor: '#24292E'}}
                    rightButtonTextStyle = {styles.titleStyle}
                />

                <Scene
                    key = "coinCreate"
                    component = { CoinAdd }
                    title = "Coin Add"
                    hideNavBar = { false }
                    titleStyle = {styles.titleStyle}
                    navigationBarStyle={{ backgroundColor: '#24292E'}}
                    rightButtonTextStyle = {styles.titleStyle}
                />

            </Scene>
        </Router>
    );
}

const styles = {
    titleStyle : {
        fontSize : 18,
        color: "#02E1E2"
    },
    buttonTitleStyle : {
        paddingLeft : 5
    },
};

export default RouterComponent;


