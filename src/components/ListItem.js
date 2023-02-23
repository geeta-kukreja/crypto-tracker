import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View , StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection , Card} from './common';

class ListItem extends Component {
     
    render() {
        const { coin_name , date , quantity , price } = this.props.coin;
        const { 
            container,
            image,
            moneySymbol,
            upperRow,
            coinSymbol,
            coinName,
            coinPrice,
            statisticsContainer,
            seperator,
            percentChangePlus,
            percentChangeMinus, 
            titleStyle
        } = styles;


        console.log(this.props);
        return (
            <TouchableWithoutFeedback >
              
                            <View style={container}> 
                                <View style={upperRow}>
                                    <Text style={coinName}>Coin Name : {coin_name}</Text>
                                </View>
                                <View style={statisticsContainer}>
                                    <Text style={coinSymbol}>Quantity : {quantity}</Text>
                                    <Text style={coinSymbol}>Price : {Math.round(price)}<Text>$ </Text>   
                                    </Text>
                                </View>
                                <View style={statisticsContainer}>
                                <Text style={coinSymbol}>Last Updated: {date}</Text>
                                </View>
                            </View>
                
            </TouchableWithoutFeedback>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginBottom: 2,
        backgroundColor: "#0E1019",
        borderBottomColor: "#e5e5e5",
        padding: 20,
        marginLeft: 5 ,
        marginRight :5, 
        marginTop : 5
    },
    upperRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold", 
        color : "#DF9206"        
    },
    coinName: {
        marginTop: 10,
        marginLeft: 80,
        marginRight: 20,
        fontWeight: "bold",
        color : "#DF9206"   
    },
    seperator: {
        marginTop: 10,
    },
    coinPrice: {
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 10,
        fontWeight: "bold",
        color : "#DF9206"        
    },
    image: {
        width: 35,
        height: 35,
    },
    moneySymbol: {
        fontWeight: "bold",
    },
    statisticsContainer: {
        display: "flex",
        borderTopColor: "#FAFAFA",
        borderTopWidth: 2,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    percentChangePlus: {
        color: "#00BFA5",
        fontWeight: "bold",
        marginLeft: 5
    },
    percentChangeMinus: {
        color: "#DD2C00",
        fontWeight: "bold",
        marginLeft: 5
    }
});



export default ListItem;
