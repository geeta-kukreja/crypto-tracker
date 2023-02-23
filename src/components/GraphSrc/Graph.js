import React from 'react'
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import { View } from 'react-native'
import GraphCard from './GraphCard';
import CoinCard from './../CoinCard';


class Graph extends React.PureComponent {

    constructor(props) {
        super(props)
       }

    state = { data: []  } ;

    componentDidMount(){
        const {  symbol, coin_name, price_usd, percent_change_24h, percent_change_7d   } = this.props;
        console.log(symbol);
        const getData = () =>
        {
          const url = 'https://min-api.cryptocompare.com/data/histoday?fsym='+symbol+'&tsym=USD&limit=10';
            console.log(url);
            fetch(url).then( r => r.json())
                .then((bitcoinData) => {
                const sortedData = [];
                let count = 0;
                for (let close  in bitcoinData.Data){
                    sortedData.push({ data : bitcoinData.Data[close] // numerical price 
                    });
                    count++;
            }
                this.setState({
                    data: sortedData,
                })
                })
                .catch((e) => {
                console.log(e);
                });
        }
        getData();
        
      }

    renderData(){
       abc = this.state.data.map(({ data }) => data );
        return abc.map( ({close}) => close )
    }
      
    render() {
        
        console.log( this.renderData() )
        const axesSvg = { fontSize: 10, fill: 'black' };
        const verticalContentInset = { top: 10, bottom: 10 }
        const xAxisHeight = 30;
        const {  symbol, coin_name, price_usd, percent_change_24h, percent_change_7d   } = this.props; 
        return (
        <GraphCard >
        
        <CoinCard 
        key ={coin_name}
        coin_name={coin_name}
        symbol={symbol}
        price_usd={price_usd}
        percent_change_24h={percent_change_24h}
        percent_change_7d={percent_change_7d}
        /> 
            <View style={{ height: 300, padding: 10, flexDirection: 'row' , backgroundColor : '#6B6B6B' }}>
         
                <YAxis
                    data={this.renderData()}
                    style={{ marginBottom: xAxisHeight }}
                    contentInset={verticalContentInset}
                    svg={axesSvg}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <LineChart
                        style={{ flex: 1 }}
                        data={this.renderData()}
                        contentInset={verticalContentInset}
                        svg={{ stroke: '#249EB8' }}
                    >
                        <Grid/>
                    </LineChart>
                    <XAxis
                        style={{ marginHorizontal: -10, height: xAxisHeight }}
                        data={this.renderData()}
                        formatLabel={(value, index) => index }
                        contentInset={{ left: 10, right: 10 }}
                        svg={axesSvg}
                        fillColor = "white"
                    />
                </View>
            </View>
        </GraphCard>
        )
    }

};

export default Graph;