import React from 'react';
import { View , Text , Modal } from 'react-native';
import { CardSection } from './../common';
import { Button } from './../common';
import Graph from './Graph';

const GraphModal = ( { visible , onAccept , graphVal , symbol, coin_name, price_usd, percent_change_24h, percent_change_7d } ) =>{
    const { cardSectionStyle , textStyle , containerStyle } = styles ;
  
    return(
            <Modal
                visible = { visible }
                transparent
                animationType = "fade"
                onRequestClose = { () => { } }
            >
            <View style = { containerStyle }>
                <Graph 
                coin_name={coin_name}
                symbol={symbol}
                price_usd={price_usd}
                percent_change_24h={percent_change_24h}
                percent_change_7d={percent_change_7d}
                />
            <CardSection style= {cardSectionStyle}>
                    <Button 
                        title = "Close Graph" 
                        onPress = { onAccept }
                    />
            </CardSection>
            </View>
            </Modal>
        );
};


const styles = {
    cardSectionStyle :{
        elevation: 1,
        marginLeft: 5,
        marginRight: 5, 
        backgroundColor : '#6B6B6B'
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
        flex : 1,
        elevation: 1
    }
};

export default GraphModal;
