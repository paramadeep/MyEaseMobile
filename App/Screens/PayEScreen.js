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


export default class PayEScreen  extends Component{
  handleLeftPress(){
    this.props.navigator.pop();
  }

  render() {
    return(
      <View>
        <Title text='Pay-E' onLeftPress={this.handleLeftPress.bind(this)}/>
      </View>
    );
  }
};

var styles=StyleSheet.create({

});
