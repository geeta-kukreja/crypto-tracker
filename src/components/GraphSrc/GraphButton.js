import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const GraphButton = ({ onPress, title }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
           
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'transparent',
        marginLeft: 0,
        marginRight: 0,
    },
    textStyle: {
        width: 'auto',
        
    }
};

export default GraphButton;
