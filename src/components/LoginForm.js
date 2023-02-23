import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged , passwordChanged , loginUser } from '../Actions';
import { connect } from 'react-redux';
import SignUpForm from './SignUpForm';
import { Router , Scene , Actions } from 'react-native-router-flux';

class LoginForm extends Component {
   
    renderError(){
        if(this.props.error){
            return <Text style= { {fontSize: 20,
                alignSelf: 'center',
                color: 'red',
                backgroundColor : 'white'
             }}
             >    INVALID ID OR PASSWORD </Text>
        }
    }

    onButtonPress(){
        const { email , password } = this.props;
        this.props.loginUser({ email , password });
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size='small' /> 
        }
       
        return <Button title='Login' onPress = { this.onButtonPress.bind(this) } />
    }

    renderSignButton()
    {
        return  <Button title='Sign Up As New .??' onPress = { () => Actions.SignUp()} />
    }


    render() {
        console.log(this.props);
        return (
            <View style={styles.viewStyle}>
            <Card style={{ paddingTop: 60  }}>
                <CardSection>
                    <Input 
                        label="Email:"
                        placeholder="email@gmail.com"
                        onChangeText = { text => this.props.emailChanged(text) }
                        value = { this.props.email }
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password:"
                        placeholder="password"
                        onChangeText = { text => this.props.passwordChanged(text) }
                        value = { this.props.password }
                    />
                </CardSection>

                { this.renderError() } 

                <CardSection>
                    { this.renderButton() }
                </CardSection>

                <CardSection>
                   {this.renderSignButton()}  
                </CardSection>
                

            
                
            </Card>
            </View>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    },
    viewStyle:{
        //backgroundColor : '#607d8b'
        backgroundColor: 'black'
    }
}; 

const mapStateToProps = state => {
    const { email , password , error , loading } = state.auth ;
    return { email , password , error , loading };
};

export default connect( mapStateToProps , { emailChanged , passwordChanged ,loginUser  } )(LoginForm);
