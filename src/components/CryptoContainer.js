import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';
import { SearchBar } from 'react-native-elements'

class CryptoContainer extends Component {
    state = { searchText : '' } ; 

    constructor()
    {
        super();
        this.state = {
            searchText : ''
        };
    }
    componentWillMount() {
        this.props.FetchCoinData();
    }

    renderSearch(item){
        {this.renderCoinCards(item)}
    };

    updateSearch(event){
    this.setState({ searchText : event});
    }

    renderCoinCards() {
        const { crypto } = this.props;
        names = crypto.data.map((coin) => coin.name );
        
        let filteredData = crypto.data.filter(
            (data) => {
                 if((data.name.toLowerCase().indexOf(this.state.searchText.toLowerCase())!==-1))
                        return data.name.toLowerCase().indexOf(this.state.searchText.toLowerCase())!==-1;
                else
                        return data.symbol.toLowerCase().indexOf(this.state.searchText.toLowerCase())!==-1;
                }
        );

        return filteredData.map((coin) => 
            <CoinCard 
                key={coin.name}
                coin_name={coin.name}
                symbol={coin.symbol}
                price_usd={coin.price_usd}
                percent_change_24h={coin.percent_change_24h}
                percent_change_7d={coin.percent_change_7d}
            /> 
        )   
    };


    render() {

        const { crypto } = this.props;
        const { contentContainer } = styles;
        
        if (crypto.isFetching) {
            return (
                <View>
                    <Spinner
                        visible={crypto.isFetching}
                        textContent={"Loading..."}
                        textStyle={{color: '#253145'}}
                        animation="fade"
                    />
                </View>
            )
        }

        return (
            <ScrollView contentContainerStyle={contentContainer}>
            <SearchBar
                value = { this.state.searchText}
                onChangeText = {  this.updateSearch.bind(this) }  
                placeholder='Type Here...' 
                containerStyle={{backgroundColor: "#0E1019", borderWidth: 1, borderRadius: 5}}
            />
                {this.renderCoinCards()}
            </ScrollView>
        )
        

    }
}

const styles = {
    contentContainer: {
        paddingBottom: 5,
        backgroundColor: "#1B1F27",
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);