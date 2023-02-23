import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text } from 'native-base';
import SearchInput, { createFilter } from 'react-native-search-filter';

class HeaderSection extends Component {
  render() {
    const { textStyle } = styles;

    return (
        <Header noLeft style={{ backgroundColor: "#24292E"}}>
          <Body>
            <Title><Text adjustsFontSizeToFit={true} style={textStyle}>Crypto-Tracker</Text></Title>
          </Body>
        </Header>
    );
  }
}

const styles = {
  textStyle: {
      fontSize: 16,
      color : '#02E1E2',
      textAlign: "center",
      
  },
};

export default HeaderSection;
