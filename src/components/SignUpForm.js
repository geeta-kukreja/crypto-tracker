import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged , passwordChanged , signUpUser } from '../Actions';
import { connect } from 'react-redux';

class SignUpForm extends Component {
    renderError(){
        if(this.props.error){
            return <Text> { this.props.error } </Text>
        }
    }

    onButtonPress(){
        const { email , password } = this.props;
        this.props.signUpUser({ email , password });
        
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size='small' /> 
        }
        return <Button title='Sign Up As New User' onPress = { this.onButtonPress.bind(this) } />
    }

    render() {
        console.log(this.props);
        return (
            <View style={styles.viewStyle}>
            <Card style={{ paddingTop: 60  }}>
                <CardSection>
                    <Input 
                        label="Name :"
                        placeholder="abcd"
                    />
                </CardSection>

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

export default connect( mapStateToProps , { emailChanged , passwordChanged ,signUpUser  } )(SignUpForm);
