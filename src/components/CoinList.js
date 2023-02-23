import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text , ListView } from 'react-native';
import { coinFetch } from '../Actions';
import ListItem from './ListItem';

class CoinList extends Component {
    componentWillMount() {
       this.props.coinFetch();
       this.createDataSource(this.props);  
      
    }

    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps);
    }

    createDataSource({ coinsdata })
    {
        console.log(coinsdata);

        const ds = new ListView.DataSource({
            rowHasChanged :(r1, r2) => r1 !== r2  
        });
        this.dataSource = ds.cloneWithRows(coinsdata);
    }

    renderRow(coin) {
        return <ListItem coin={coin} />
    }

    render() {
        return (
            <ListView
            enableEmptySections
            dataSource = { this.dataSource }
            renderRow = { this.renderRow }
            />
        );
    }
}

const mapStateToProps = state => {
    const coinsdata = _.map( state.coinsdata , (val , uid  ) => {
        return { ...val , uid  };
     });
     console.log(coinsdata);
     return { coinsdata };
};

export default connect(mapStateToProps , { coinFetch })(CoinList);