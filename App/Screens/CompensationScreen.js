'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import {
  Title,
  Button,
} from '../Components';

class CompensationScreen  extends Component{
 handleLeftPress(){
    this.props.navigator.pop();
  }

  render() {
    return(
      <View>
        <Title text='Compensation' onLeftPress={this.handleLeftPress.bind(this)}/>
      </View>
    );
  }
};

var styles=StyleSheet.create({

});

module.exports=CompensationScreen;
