import React , { Component }from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { images } from '../Utils/CoinIcons';
import GraphModal from './GraphSrc/GraphModal'; 
import GraphButton from './GraphSrc/GraphButton';
import Icon from "react-native-vector-icons/SimpleLineIcons";

class CoinCard extends Component 
{
state = { showModal : false   }

constructor(props) {
    super(props);
    this.state = {
        showModal : false
    };
    }

    render ()
    {
        const { symbol, coin_name, price_usd, percent_change_24h, percent_change_7d  } = this.props;
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
            percentChangeMinus
        } = styles;

        let graphColor = "green";
        x = Math.floor(price_usd * 100) / 100;
        console.log(this.state); // alerts 4.34
        
    return (
        <View style={container}>
           
            <View style={upperRow}>
                <Image
                    style={styles.image}
                    source={{ uri: images[symbol] }}
                />
                <Text style={coinSymbol}>{symbol}</Text>
                <Text style={seperator}>|</Text>
                <Text style={coinName}>{coin_name}</Text>
                <Text style={coinPrice}>{x.toFixed(2)}
                <Text style={moneySymbol}> $ </Text>
                </Text>
            </View>

            <GraphButton
             onPress = {() => this.setState ({ showModal : true })}
             />
             <GraphModal
             visible = { this.state.showModal }
             onAccept = { () => this.setState({showModal : !this.state.showModal }) } 
             coin_name={coin_name}
             symbol={symbol}
             price_usd={price_usd}
             percent_change_24h={percent_change_24h}
             percent_change_7d={percent_change_7d}
             />

            <View style={statisticsContainer}>
                <Text>
                <Icon name='chart' size={25} color={graphColor}  onPress = {() => this.setState ({ showModal : true })}
               />
                </Text>
                <Text style = { {color :"#797A7E"} }>24h:
                     <Text style={percent_change_24h < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_24h} % </Text>
                </Text>
                <Text style = { {color :"#797A7E"} }>7d:
                    <Text style={percent_change_7d < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_7d} % </Text>
                </Text>
                
            </View>
            
          
       
        </View> 
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
        color :"#797A7E"       
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20,
        color :"#6567A6" 
    },
    seperator: {
        marginTop: 10,
        color : "white"
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

export default CoinCard;
