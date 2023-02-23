import React from 'react';
import { View , Text , Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ( { children , visible , onAccept , onDecline } ) =>{
    const { cardSectionStyle , textStyle , containerStyle } = styles ;
  
    return(
            <Modal
                visible = { visible }
                transparent
                animationType = "slide"
                onRequestClose = { () => { } }
            >
            <View style = { containerStyle }>
                <CardSection style={ cardSectionStyle }>
                    <Text style = { textStyle }>
                        {children}
                    </Text>  
                </CardSection>

                <CardSection>
                    <Button 
                        title = "Yes" 
                        onPress = { onAccept }
                    />
                </CardSection>

                <CardSection>
                  <Button 
                        title = "No" 
                        onPress = { onDecline }
                   />
                </CardSection>
            </View>
            </Modal>
        );
};


const styles = {
    cardSectionStyle :{
        justifyContent : 'center'
    },
    textStyle: {
        flex : 1,
        fontSize : 18,
        textAlign : 'center',
        lineHeight : 40
    },
    containerStyle :{
        backgroundColor : 'rgba(0,0,0,0.75)', 
        position : 'relative',
        justifyContent : 'center',
        flex : 1
    }
};

export { Confirm };
