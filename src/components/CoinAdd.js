import React, { Component } from 'react';
import { Text, Picker , View } from 'react-native';
import { Card, CardSection, Input , Button } from './common';
import FetchCoinData from './../Actions/FetchCoinData';
import { connect } from 'react-redux';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker';
import Spinner from 'react-native-loading-spinner-overlay';
import { 
    coinFormNameChanged , 
    coinFormDateChanged,
    coinFormQuantityChanged ,
    coinFormPriceChanged,
    coinCreate
} from '../Actions';
import _ from 'lodash';


class CoinAdd extends Component {
    state = { date :"2016-05-15" , coin_name : '' , quantity : '' , price :'' } ; 

    constructor(){
        super();
        this.state = {date:"2016-05-15" , coin_name : '' , quantity : '' , price :''}
    }

    componentWillMount() {
        this.props.FetchCoinData();
    }

    
    renderCoinNames(){
        const { crypto } = this.props;
        return names;
    }

    renderPrice(){
    const { crypto } = this.props;
    const newV = crypto.data;
    const newVal= _.values(newV);
    //console.log(this.state.coin_name)
    
                                    if(this.state.coin_name == "Bitcoin")
                                    {
                                        console.log(this.state.coin_name)
                                        let filteredData = crypto.data.filter(
                                            (data) => {
                                                        return data.symbol.indexOf('BTC')!==-1;
                                                }
                                        );
                                        console.log(filteredData);
                                        quantity =this.state.quantity
                                        price = (filteredData.map((coin) => coin.price_usd)) *  quantity ;
                                        this.setState({ price : price });
                                        console.log(price);
                                        return price;
                                    }
                                    else
                                    {
                                        console.log(this.state.coin_name)
                                        newVal1 = newVal.filter(
                                            (newVal) => {
                                                return newVal.name.indexOf(this.state.coin_name)!==-1;
                                            }
                                        );
                                    
                                        console.log(newVal1);
                                        quantity =this.state.quantity
                                        price = (newVal1.map((coin) => coin.price_usd)) *  quantity ;
                                        this.setState({ price : price });
                                        console.log(price);
                                        return price;
                                    }

   }
 
    onButtonPress(){
    const { coin_name , date ,  quantity , price  } = this.props ;
    this.props.coinCreate({  coin_name , date ,  quantity , price  });
    }

    function(value){
        
    }

    render() {
        coinNames = this.renderCoinNames();

        //Date section 
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        today = year+"-"+month+"-"+date;
        console.log(today);

        //Data for dropdown
        var newArr = Object.keys(coinNames);
         // console.log(newArr);
          
          var mappedArr = newArr.map(function(i) {
            return { value : coinNames[i] };
          });
       
         console.log(this.state);
        return (
          
            <Card>
               <CardSection style={{ flexDirection: 'row' , justifyContent: 'flex-start'   }}>
               <View> 
               <Text style={styles.pickerText}>
                    Select A Coin :
                </Text>    
                </View>
                <View>
            
                <Dropdown
                    dropdownMargins = {{ min: 0 , max : 0}}
                    dropdownOffset = {{ top: 2, left: 0 }}
                    itemPadding = {4}
                    dropdownPosition = {-4.5}
                    containerStyle = {{ marginLeft : 20 , width : 150  }}
                    data={mappedArr}
                    onChangeText={  (value) => {
                        this.props.coinFormNameChanged(value);
                        this.setState({coin_name : value });
                    }
                    }
                    value = {this.props.coin_name}
                />
                </View>
                </CardSection>
                
                <CardSection>
                <Text style={styles.pickerText}>
                Select Date :
                </Text>
                <DatePicker
                style={{width: 200}}
                date={today}
                mode="date"
                placeholder="Select date"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate={today}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 5,
                    marginLeft: 30
                  },
                  dateInput: {
                    marginLeft: 70
                  }
                 
                }}
/*                onDateChange={(date) => {this.setState({date: date})}}
                onChangeText = { (value) => {this.setState({coin_name : value })} }
  */              //onDateChange = { (date) => this.props.coinFormDateChanged(date)  }
                    onDateChange={(date) => { 
                        this.props.coinFormDateChanged(date);
                        this.setState({date: date});
                        console.log('it works!');
                    }}
                />

                </CardSection>

                <CardSection>
                <Input
                label="Quantity:"
                placeholder="Enter Number Of Coins"
                keyboardType={'phone-pad'}
                onChangeText={ (value) => {
                    this.props.coinFormQuantityChanged(value);
                    this.setState({quantity : value });
                } }
                />
                </CardSection>
        
                <CardSection>
                <Input
                label="Price:"
                onChangeText = { (value) => {this.props.coinFormPriceChanged(this.renderPrice());} }
                />
                <Text style={{ fontSize: 18, marginRight : 10 , marginTop : 8 }}> 
                    { this.state.price } 
                </Text>
                </CardSection>

                <CardSection>
                    <Button
                      title="Add Coin"
                      onPress = { this.onButtonPress.bind(this) }
                    />
                </CardSection>

            </Card>
        );
    }
}

const styles = {
    pickerText: {
        fontSize: 18,
        marginLeft : 20,
        marginTop : 10 , 


    }
};

const mapStateToProps = state => {
    const { coin_name , date , quantity , price } = state.coinsForm  ;
    return {  coin_name , date , quantity , price ,  crypto: state.crypto  };
    }

export default connect(mapStateToProps, { FetchCoinData , coinFormNameChanged ,
    coinFormDateChanged , 
    coinFormQuantityChanged ,
    coinFormPriceChanged ,
    coinCreate
 })(CoinAdd);